"use client";

import { useActionState } from "react";
import { loginAction, type LoginState } from "@/lib/actions/auth";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      id="login-submit-btn"
      type="submit"
      disabled={pending}
      className="w-full py-3.5 bg-gold-accent text-luxury-black font-black text-xs uppercase tracking-[0.3em] rounded-xl hover:bg-amber-400 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
    >
      {pending ? "Authenticating..." : "Enter Console"}
    </button>
  );
}

export default function AdminLoginPage() {
  const [state, action] = useActionState<LoginState, FormData>(loginAction, null);

  return (
    <div className="min-h-screen w-full bg-[#050505] flex items-center justify-center px-4">
      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/[0.03] blur-3xl" />
      </div>

      <div className="relative w-full max-w-sm">
        {/* Brand */}
        <div className="text-center mb-10">
          <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-luxury-muted mb-3">
            Portfolio Core
          </p>
          <h1 className="text-3xl font-black uppercase tracking-tight text-luxury-white">
            Admin Console
          </h1>
          <p className="text-xs text-luxury-muted mt-2 tracking-wide">
            Authorized personnel only
          </p>
        </div>

        {/* Card */}
        <div className="bg-[#0F0F0F] border border-white/[0.06] rounded-2xl p-8 shadow-2xl">
          <form action={action} className="flex flex-col gap-5">
            {/* Root error */}
            {state?.errors?.root && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                <p className="text-xs text-red-400 font-mono">
                  {state.errors.root[0]}
                </p>
              </div>
            )}

            {/* Username */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="username"
                className="text-[10px] font-mono uppercase tracking-widest text-luxury-muted"
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="w-full bg-[#0A0A0A] border border-white/[0.07] rounded-xl px-4 py-3 text-sm text-luxury-white placeholder:text-white/20 focus:outline-none focus:border-gold-accent/50 transition-colors"
                placeholder="Enter username"
              />
              {state?.errors?.username && (
                <p className="text-[11px] text-red-400 font-mono">
                  {state.errors.username[0]}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="password"
                className="text-[10px] font-mono uppercase tracking-widest text-luxury-muted"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full bg-[#0A0A0A] border border-white/[0.07] rounded-xl px-4 py-3 text-sm text-luxury-white placeholder:text-white/20 focus:outline-none focus:border-gold-accent/50 transition-colors"
                placeholder="••••••••"
              />
              {state?.errors?.password && (
                <p className="text-[11px] text-red-400 font-mono">
                  {state.errors.password[0]}
                </p>
              )}
            </div>

            <div className="mt-2">
              <SubmitButton />
            </div>
          </form>
        </div>

        <p className="text-center mt-6 text-[10px] text-white/10 font-mono uppercase tracking-widest">
          Secured with encrypted session token
        </p>
      </div>
    </div>
  );
}
