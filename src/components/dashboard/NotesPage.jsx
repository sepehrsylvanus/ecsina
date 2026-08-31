"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import mammoth from "mammoth/mammoth.browser";
import {
  FaFileWord,
  FaPlus,
  FaTrash,
  FaBold,
  FaItalic,
  FaUnderline,
  FaListUl,
  FaListOl,
  FaAlignRight,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignJustify,
  FaRotateLeft,
  FaRotateRight,
  FaArrowsLeftRight,
  FaSuperscript,
  FaPrint,
  FaShareNodes,
  FaUpload,
  FaFileLines,
} from "react-icons/fa6";

const STORAGE_KEY = "ecsina_notes_v1";

const createNote = (title = "یادداشت بدون عنوان", html = "") => ({
  id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
  title,
  html,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
});

function NotesPage() {
  const [notes, setNotes] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [title, setTitle] = useState("");
  const [hydrated, setHydrated] = useState(false);
  const [uploading, setUploading] = useState(false);
  const editorRef = useRef(null);
  const fileInputRef = useRef(null);

  /* ---------- بارگذاری اولیه از localStorage ---------- */
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      if (Array.isArray(parsed) && parsed.length) {
        setNotes(parsed);
        setActiveId(parsed[0].id);
        setTitle(parsed[0].title);
      }
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  /* ---------- ذخیره در localStorage ---------- */
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    } catch {
      /* حجم زیاد — نادیده گرفته می‌شود */
    }
  }, [notes, hydrated]);

  const activeNote = notes.find((n) => n.id === activeId) || null;

  /* ---------- همگام‌سازی محتوای ویرایشگر با یادداشت فعال ---------- */
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = activeNote ? activeNote.html : "";
    }
  }, [activeId]); // eslint-disable-line react-hooks/exhaustive-deps

  /* ---------- ذخیره محتوای ویرایش‌شده ---------- */
  const persistContent = useCallback(() => {
    if (!editorRef.current || !activeId) return;
    const html = editorRef.current.innerHTML;
    setNotes((prev) =>
      prev.map((n) =>
        n.id === activeId
          ? { ...n, html, updatedAt: new Date().toISOString() }
          : n,
      ),
    );
  }, [activeId]);

  const handleInput = () => persistContent();

  /* ---------- مدیریت یادداشت‌ها ---------- */
  const addNote = (t = "یادداشت بدون عنوان", html = "") => {
    const note = createNote(t, html);
    setNotes((prev) => [note, ...prev]);
    setActiveId(note.id);
    setTitle(note.title);
    return note;
  };

  const deleteNote = (id) => {
    setNotes((prev) => {
      const next = prev.filter((n) => n.id !== id);
      if (id === activeId) {
        const fallback = next[0] || null;
        setActiveId(fallback ? fallback.id : null);
        setTitle(fallback ? fallback.title : "");
        if (editorRef.current) {
          editorRef.current.innerHTML = fallback ? fallback.html : "";
        }
      }
      return next;
    });
    toast.success("یادداشت حذف شد");
  };

  const handleTitleChange = (value) => {
    setTitle(value);
    if (!activeId) return;
    setNotes((prev) =>
      prev.map((n) =>
        n.id === activeId
          ? { ...n, title: value, updatedAt: new Date().toISOString() }
          : n,
      ),
    );
  };

  /* ---------- آپلود فایل Word ---------- */
  const handleFile = async (file) => {
    if (!file) return;
    const isDocx =
      file.name.toLowerCase().endsWith(".docx") ||
      file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    if (!isDocx) {
      toast.error("لطفاً یک فایل Word با پسوند docx. انتخاب کنید");
      return;
    }
    setUploading(true);
    try {
      const arrayBuffer = await file.arrayBuffer();
      const result = await mammoth.convertToHtml({ arrayBuffer });
      if (result.messages?.length) {
        console.warn("mammoth warnings:", result.messages);
      }
      const note = addNote(file.name.replace(/\.docx$/i, ""), result.value);
      if (editorRef.current) editorRef.current.innerHTML = note.html;
      toast.success("فایل Word بارگذاری شد و قابل ویرایش است");
    } catch (err) {
      console.error(err);
      toast.error("خطا در تبدیل فایل Word");
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  /* ---------- خروجی PDF (چاپ مرورگر) ---------- */
  const exportPdf = () => {
    if (!activeNote) return;
    persistContent();
    setTimeout(() => window.print(), 100);
  };

  /* ---------- اشتراک‌گذاری ---------- */
  const shareNote = async () => {
    if (!activeNote) return;
    const text = editorRef.current
      ? editorRef.current.innerText
      : activeNote.html;
    if (navigator.share) {
      try {
        await navigator.share({
          title: title || "یادداشت",
          text: `${title}\n\n${text}`,
        });
      } catch {
        /* لغو توسط کاربر */
      }
    } else {
      try {
        await navigator.clipboard.writeText(`${title}\n\n${text}`);
        toast.success("محتوای یادداشت کپی شد");
      } catch {
        toast.error("اشتراک‌گذاری پشتیبانی نمی‌شود");
      }
    }
  };

  /* ---------- خروجی Word ---------- */
  const exportDocx = () => {
    if (!activeNote) return;
    const html = editorRef.current
      ? editorRef.current.innerHTML
      : activeNote.html;
    const doc = `
      <html xmlns:o="urn:schemas-microsoft-com:office:office"
            xmlns:w="urn:schemas-microsoft-com:office:word"
            xmlns="http://www.w3.org/TR/REC-html40">
        <head><meta charset="utf-8"><title>${escapeHtml(title)}</title></head>
        <body dir="rtl" style="font-family:Tahoma, sans-serif;">
          <h1>${escapeHtml(title)}</h1>
          ${html}
        </body>
      </html>`;
    const blob = new Blob(["\ufeff", doc], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${title || "یادداشت"}.doc`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("فایل Word دانلود شد");
  };

  const Divider = () => <span className="w-px h-5 bg-gray-200 mx-1.5 shrink-0" />;

  const ToolbarBtn = ({ onClick, title: label, children }) => (
    <button
      type="button"
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      title={label}
      className="p-2 rounded-lg hover:bg-primary-7/10 text-gray-600 hover:text-primary-7 transition-colors cursor-pointer"
    >
      {children}
    </button>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 pb-10">
      {/* نوار بالای صفحه */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-primary-7 flex items-center gap-2">
          <FaFileLines className="w-5 h-5" />
          یادداشت‌ها
        </h1>
        <div className="flex-1" />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary-7 text-white text-sm font-medium hover:bg-primary-8 transition-colors cursor-pointer disabled:opacity-60"
        >
          <FaUpload className="w-4 h-4" />
          {uploading ? "در حال بارگذاری..." : "بارگذاری فایل Word"}
        </button>
        <button
          type="button"
          onClick={() => addNote()}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-primary-7 border border-primary-7/30 text-sm font-medium hover:bg-primary-7/5 transition-colors cursor-pointer"
        >
          <FaPlus className="w-4 h-4" />
          یادداشت جدید
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept=".docx"
          className="hidden"
          onChange={(e) => handleFile(e.target.files?.[0])}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-5">
        {/* لیست یادداشت‌ها */}
        <aside className="bg-white rounded-2xl shadow-sm border border-gray-100 p-3 h-fit">
          {notes.length === 0 ? (
            <p className="text-sm text-gray-400 text-center py-6">
              هنوز یادداشتی ندارید. یک فایل Word بارگذاری کنید یا یادداشت جدید
              بسازید.
            </p>
          ) : (
            <ul className="flex flex-col gap-1.5">
              {notes.map((note) => (
                <li key={note.id}>
                  <div
                    className={`group flex items-center gap-2 rounded-xl px-3 py-2.5 cursor-pointer transition-colors ${
                      note.id === activeId
                        ? "bg-primary-7/10 text-primary-7"
                        : "hover:bg-gray-50 text-gray-600"
                    }`}
                    onClick={() => {
                      setActiveId(note.id);
                      setTitle(note.title);
                    }}
                  >
                    <FaFileWord className="w-4 h-4 shrink-0 text-primary-7/70" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">
                        {note.title}
                      </p>
                      <p className="text-[11px] text-gray-400">
                        {new Date(note.updatedAt).toLocaleDateString("fa-IR")}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteNote(note.id);
                      }}
                      title="حذف یادداشت"
                      className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg text-red-400 hover:text-red-600 hover:bg-red-50 transition-all cursor-pointer"
                    >
                      <FaTrash className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </aside>
        {/* ویرایشگر */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {!activeNote ? (
            <div className="flex flex-col items-center justify-center gap-4 py-24 text-gray-400">
              <FaFileWord className="w-14 h-14 text-primary-7/30" />
              <p className="text-sm">
                فایل Word خود را بارگذاری کنید تا در همین‌جا ویرایشش کنید
              </p>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-7 text-white text-sm font-medium hover:bg-primary-8 transition-colors cursor-pointer"
              >
                <FaUpload className="w-4 h-4" />
                انتخاب فایل Word
              </button>
            </div>
          ) : (
            <>
              {/* عنوان */}
              <div className="flex items-center gap-3 px-5 pt-5 pb-3">
                <input
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="عنوان یادداشت"
                  className="flex-1 text-lg font-bold text-gray-700 outline-none bg-transparent placeholder:text-gray-300"
                />
              </div>

              {/* نوار ابزار (پیل شناور) */}
              <div className="px-5 pb-4">
                <div className="flex flex-wrap items-center gap-1 rounded-full border border-gray-200 bg-white shadow-sm px-3 py-2">
                  {/* خروجی PDF / Word */}
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={exportPdf}
                    title="خروجی PDF / چاپ"
                    className="flex flex-col items-center justify-center w-8 h-9 rounded-md bg-gray-900 text-white text-[8px] font-bold hover:bg-gray-700 transition-colors cursor-pointer leading-none"
                  >
                    PDF
                  </button>
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={exportDocx}
                    title="دانلود به صورت Word"
                    className="flex flex-col items-center justify-center w-8 h-9 rounded-md border border-gray-300 text-gray-700 text-[10px] font-bold hover:bg-primary-7/10 hover:text-primary-7 hover:border-primary-7/40 transition-colors cursor-pointer leading-none"
                  >
                    W
                  </button>

                  <Divider />

                  {/* فونت */}
                  <select
                    title="فونت"
                    onChange={(e) => exec("fontName", e.target.value)}
                    defaultValue=""
                    className="h-8 rounded-lg border border-gray-200 bg-white text-xs text-gray-600 px-1.5 cursor-pointer outline-none hover:border-primary-7/40"
                  >
                    <option value="" disabled>
                      فونت
                    </option>
                    <option value="Tahoma">Tahoma</option>
                    <option value="IRANSans, Tahoma">ایران‌سنس</option>
                    <option value="Arial">Arial</option>
                    <option value="Times New Roman">Times New Roman</option>
                    <option value="Courier New">Courier New</option>
                  </select>

                  <Divider />
                  {/* بولد / ایتالیک / زیرخط / سایز */}
                  <ToolbarBtn onClick={() => exec("bold")} title="بولد">
                    <FaBold className="w-3.5 h-3.5" />
                  </ToolbarBtn>
                  <ToolbarBtn onClick={() => exec("italic")} title="ایتالیک">
                    <FaItalic className="w-3.5 h-3.5" />
                  </ToolbarBtn>
                  <ToolbarBtn onClick={() => exec("underline")} title="زیرخط">
                    <FaUnderline className="w-3.5 h-3.5" />
                  </ToolbarBtn>
                  <select
                    title="اندازه فونت"
                    onChange={(e) => {
                      if (e.target.value) exec("fontSize", e.target.value);
                    }}
                    defaultValue=""
                    className="h-8 rounded-lg border border-gray-200 bg-white text-xs text-gray-600 px-1 cursor-pointer outline-none hover:border-primary-7/40"
                  >
                    <option value="" disabled>
                      16
                    </option>
                    <option value="1">10</option>
                    <option value="2">13</option>
                    <option value="3">16</option>
                    <option value="4">18</option>
                    <option value="5">24</option>
                    <option value="6">32</option>
                    <option value="7">48</option>
                  </select>

                  <Divider />

                  {/* ترازبندی */}
                  <ToolbarBtn
                    onClick={() => exec("justifyRight")}
                    title="راست‌چین"
                  >
                    <FaAlignRight className="w-3.5 h-3.5" />
                  </ToolbarBtn>
                  <ToolbarBtn
                    onClick={() => exec("justifyCenter")}
                    title="وسط‌چین"
                  >
                    <FaAlignCenter className="w-3.5 h-3.5" />
                  </ToolbarBtn>
                  <ToolbarBtn
                    onClick={() => exec("justifyLeft")}
                    title="چپ‌چین"
                  >
                    <FaAlignLeft className="w-3.5 h-3.5" />
                  </ToolbarBtn>
                  <ToolbarBtn
                    onClick={() => exec("justifyFull")}
                    title="هم‌تراز"
                  >
                    <FaAlignJustify className="w-3.5 h-3.5" />
                  </ToolbarBtn>

                  {/* لیست‌ها */}
                  <ToolbarBtn
                    onClick={() => exec("insertOrderedList")}
                    title="لیست شماره‌دار"
                  >
                    <FaListOl className="w-3.5 h-3.5" />
                  </ToolbarBtn>
                  <ToolbarBtn
                    onClick={() => exec("insertUnorderedList")}
                    title="لیست تیغه‌ای"
                  >
                    <FaListUl className="w-3.5 h-3.5" />
                  </ToolbarBtn>

                  <Divider />
                  {/* هدینگ / جداکننده / بالانویس */}
                  <select
                    title="سبک پاراگراف"
                    onChange={(e) => {
                      if (e.target.value) exec("formatBlock", e.target.value);
                    }}
                    defaultValue=""
                    className="h-8 rounded-lg border border-gray-200 bg-white text-xs text-gray-600 px-1.5 cursor-pointer outline-none hover:border-primary-7/40"
                  >
                    <option value="" disabled>
                      H2
                    </option>
                    <option value="<h1>">H1</option>
                    <option value="<h2>">H2</option>
                    <option value="<h3>">H3</option>
                    <option value="<p>">متن</option>
                  </select>
                  <ToolbarBtn
                    onClick={() => exec("insertHorizontalRule")}
                    title="خط جداکننده"
                  >
                    <FaArrowsLeftRight className="w-3.5 h-3.5" />
                  </ToolbarBtn>
                  <ToolbarBtn
                    onClick={() => exec("superscript")}
                    title="بالانویس"
                  >
                    <FaSuperscript className="w-3.5 h-3.5" />
                  </ToolbarBtn>

                  <Divider />

                  {/* واگرد / بازانجام */}
                  <ToolbarBtn onClick={() => exec("undo")} title="واگرد">
                    <FaRotateLeft className="w-3.5 h-3.5" />
                  </ToolbarBtn>
                  <ToolbarBtn onClick={() => exec("redo")} title="بازانجام">
                    <FaRotateRight className="w-3.5 h-3.5" />
                  </ToolbarBtn>

                  <Divider />

                  {/* پاک‌کردن فرمت / چاپ / اشتراک‌گذاری */}
                  <ToolbarBtn
                    onClick={() => exec("removeFormat")}
                    title="پاک‌کردن قالب‌بندی"
                  >
                    <FaTrash className="w-3.5 h-3.5" />
                  </ToolbarBtn>
                  <ToolbarBtn onClick={exportPdf} title="چاپ / PDF">
                    <FaPrint className="w-3.5 h-3.5" />
                  </ToolbarBtn>
                  <ToolbarBtn onClick={shareNote} title="اشتراک‌گذاری">
                    <FaShareNodes className="w-3.5 h-3.5" />
                  </ToolbarBtn>
                </div>
              </div>

              {/* محتوای ویرایشگر */}
              <div
                ref={editorRef}
                contentEditable
                suppressContentEditableWarning
                dir="rtl"
                onInput={handleInput}
                onBlur={handleInput}
                className="notes-editor min-h-[420px] max-h-[65vh] overflow-y-auto px-6 py-5 text-sm leading-8 text-gray-700 outline-none focus:bg-primary-7/[0.02] transition-colors"
              />
            </>
          )}
        </section>
      </div>
    </div>
  );
}

function escapeHtml(str = "") {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export default NotesPage;


  /* ---------- فرمان‌های قالب‌بندی ---------- */
  const exec = (command, value = null) => {
    editorRef.current?.focus();
    document.execCommand(command, false, value);
    persistContent();
  };
