"use client";
import { createClient } from "@/lib/supabase/client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [mode, setMode] = useState<"login" | "signup">("login");
  const router = useRouter();
  const supabase = createClient();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const { error } =
      mode === "login"
        ? await supabase.auth.signInWithPassword({ email, password })
        : await supabase.auth.signUp({ email, password });
    if (error) {
      setError(error.message);
      return;
    }
    router.push("/produits");
    router.refresh();
  };
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F7F8F2] p-5">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-3xl border border-[#556B2F]/10 bg-white p-7 shadow-sm"
      >
        <h1 className="mb-6 text-xl font-bold text-[#1F2617]">
          {mode === "login" ? "Connexion" : "Créer un compte"}
        </h1>
        {error && (
          <p className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
            {error}
          </p>
        )}
        <div className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-black placeholder:text-gray-400"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe"
            required
            minLength={6}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-black placeholder:text-gray-400"
          />
        </div>
        <button
          type="submit"
          className="mt-6 w-full rounded-xl bg-[#556B2F] px-5 py-3 text-sm font-semibold text-white"
        >
          {mode === "login" ? "Se connecter" : "S'inscrire"}
        </button>
        <button
          type="button"
          onClick={() => setMode(mode === "login" ? "signup" : "login")}
          className="mt-4 w-full text-sm text-[#556B2F]"
        >
          {mode === "login"
            ? "Pas de compte ? Inscrivez-vous"
            : "Déjà un compte ? Connectez-vous"}
        </button>
      </form>
    </main>
  );
}