"use server";

import { redirect } from "next/navigation";
import { LoginSchema } from "@/lib/validations";
import { createSession, deleteSession } from "@/lib/session";

export type LoginState = {
  errors?: { username?: string[]; password?: string[]; root?: string[] };
  message?: string;
} | null;

// ---------------------------------------------------------------------------
// Login
// ---------------------------------------------------------------------------

export async function loginAction(
  _prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const raw = {
    username: formData.get("username"),
    password: formData.get("password"),
  };

  const validated = LoginSchema.safeParse(raw);
  if (!validated.success) {
    return { errors: validated.error.flatten().fieldErrors };
  }

  const { username, password } = validated.data;

  const validUsername = process.env.ADMIN_USERNAME;
  const validPassword = process.env.ADMIN_PASSWORD;

  if (username !== validUsername || password !== validPassword) {
    return {
      errors: { root: ["Invalid credentials. Access denied."] },
    };
  }

  await createSession(username);
  redirect("/dashboard");
}

// ---------------------------------------------------------------------------
// Logout
// ---------------------------------------------------------------------------

export async function logoutAction(): Promise<void> {
  await deleteSession();
  redirect("/admin/login");
}
