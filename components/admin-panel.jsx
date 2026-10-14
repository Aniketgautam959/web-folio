"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function AdminPanel() {
  const [ready, setReady] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [url, setUrl] = useState("");
  const [avatar, setAvatar] = useState("");
  const [photoFile, setPhotoFile] = useState(null);
  const [photoPreview, setPhotoPreview] = useState("");
  const [error, setError] = useState("");
  const [photoError, setPhotoError] = useState("");
  const [saved, setSaved] = useState(false);
  const [photoSaved, setPhotoSaved] = useState(false);
  const [busy, setBusy] = useState(false);
  const [photoBusy, setPhotoBusy] = useState(false);

  async function loadSettings() {
    const [resume, photo] = await Promise.all([
      fetch("/api/admin/resume").then((response) => response.json()),
      fetch("/api/admin/avatar").then((response) => response.json()),
    ]);
    setUrl(resume.url || "");
    setAvatar(photo.url || "");
  }

  useEffect(() => {
    fetch("/api/admin/session")
      .then((response) => response.json())
      .then(async (session) => {
        if (!session.ok) return;
        await loadSettings();
        setAuthed(true);
      })
      .finally(() => setReady(true));
  }, []);

  async function login(event) {
    event.preventDefault();
    setBusy(true);
    setError("");

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      setError(data.error || "Could not sign in.");
      setBusy(false);
      return;
    }

    await loadSettings();
    setPassword("");
    setAuthed(true);
    setBusy(false);
  }

  function choosePhoto(event) {
    const file = event.target.files?.[0] || null;
    setPhotoFile(file);
    setPhotoSaved(false);
    setPhotoError("");
    setPhotoPreview((current) => {
      if (current.startsWith("blob:")) URL.revokeObjectURL(current);
      return file ? URL.createObjectURL(file) : "";
    });
  }

  async function uploadPhoto(event) {
    event.preventDefault();
    if (!photoFile) {
      setPhotoError("Choose a photo first.");
      return;
    }

    setPhotoBusy(true);
    setPhotoError("");
    setPhotoSaved(false);

    const body = new FormData();
    body.append("photo", photoFile);
    const response = await fetch("/api/admin/avatar", {
      method: "POST",
      body,
    });
    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      setPhotoError(data.error || "Could not save the photo.");
      setPhotoBusy(false);
      return;
    }

    setAvatar(data.url || avatar);
    setPhotoFile(null);
    setPhotoPreview((current) => {
      if (current.startsWith("blob:")) URL.revokeObjectURL(current);
      return "";
    });
    setPhotoSaved(true);
    setPhotoBusy(false);
  }

  async function save(event) {
    event.preventDefault();
    setBusy(true);
    setError("");
    setSaved(false);

    const response = await fetch("/api/admin/resume", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });
    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      setError(data.error || "Could not save.");
      setBusy(false);
      return;
    }

    setUrl(data.url || url);
    setSaved(true);
    setBusy(false);
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthed(false);
    setSaved(false);
    setPhotoSaved(false);
    setUrl("");
    setAvatar("");
    setPhotoFile(null);
  }

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <div className="site-shell flex min-h-screen items-center py-16">
        <div className="w-full max-w-lg">
          <Link href="/" className="font-script text-3xl leading-none">
            Aniket
          </Link>
          <p className="mt-8 font-script text-4xl">admin</p>
          <h1 className="mt-2 text-xs font-semibold uppercase tracking-[0.18em]">
            Site
          </h1>

          {!ready ? (
            <p className="mt-8 text-sm text-muted-foreground">Loading…</p>
          ) : authed ? (
            <div className="mt-8 space-y-10">
              <form onSubmit={uploadPhoto}>
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em]">
                  Profile photo
                </h2>
                {(photoPreview || avatar) && (
                  <img
                    src={photoPreview || avatar}
                    alt="Current profile"
                    className="mt-4 h-36 w-28 rounded-2xl object-cover"
                  />
                )}
                <label htmlFor="profile-photo" className="mt-4 block text-sm">
                  JPG, PNG, or WebP. Under 5 MB.
                </label>
                <input
                  id="profile-photo"
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif"
                  onChange={choosePhoto}
                  className="mt-3 block w-full text-sm text-muted-foreground file:mr-3 file:rounded-full file:border-0 file:bg-primary file:px-4 file:py-2 file:text-[11px] file:font-semibold file:uppercase file:tracking-[0.16em] file:text-primary-foreground"
                />
                {photoError && (
                  <p className="mt-3 text-sm text-destructive">{photoError}</p>
                )}
                {photoSaved && (
                  <p className="mt-3 text-sm text-foreground">
                    Saved. The homepage photo is updated.
                  </p>
                )}
                <button
                  type="submit"
                  className="btn-gold mt-6"
                  disabled={photoBusy}>
                  {photoBusy ? "Uploading…" : "Update photo"}
                </button>
              </form>

              <form onSubmit={save}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em]">
                Resume link
              </h2>
              <label htmlFor="resume-url" className="mt-4 block text-sm">
                Google Drive or any public resume link
              </label>
              <input
                id="resume-url"
                type="url"
                required
                value={url}
                onChange={(event) => {
                  setUrl(event.target.value);
                  setSaved(false);
                }}
                className="mt-3 w-full rounded-2xl border border-foreground/20 bg-card px-4 py-3 text-sm outline-none focus:border-foreground"
              />
              {error && <p className="mt-3 text-sm text-destructive">{error}</p>}
              {saved && (
                <p className="mt-3 text-sm text-foreground">
                  Saved. The Resume buttons now use this link.
                </p>
              )}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button type="submit" className="btn-gold" disabled={busy}>
                  {busy ? "Saving…" : "Save link"}
                </button>
                <button type="button" onClick={logout} className="btn-ghost">
                  Log out
                </button>
              </div>
            </form>
            </div>
          ) : (
            <form onSubmit={login} className="mt-8">
              <label htmlFor="admin-password" className="text-sm">
                Password
              </label>
              <input
                id="admin-password"
                type="password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-3 w-full rounded-2xl border border-foreground/20 bg-card px-4 py-3 text-sm outline-none focus:border-foreground"
              />
              {error && <p className="mt-3 text-sm text-destructive">{error}</p>}
              <button type="submit" className="btn-gold mt-6" disabled={busy}>
                {busy ? "Checking…" : "Continue"}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
