"use client";

import { useState } from "react";
import Link from "next/link";
import { resetCode, resetPassword } from '@/api/AuthAPI';

export default function AccountPage() {
    const [step, setStep] = useState<"username" | "code">("username");
    const [username, setUsername] = useState("");
    const [code, setCode] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    async function handleSendCode(e: React.FormEvent | React.MouseEvent) {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            await resetCode(username.trim());
            setStep("code");
        } catch {
            setError("Could not send the code. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    async function handleVerifyCode(e: React.FormEvent) {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setLoading(true);
        try {
            await resetPassword(username.trim(), code , password);
            setSuccess(true);
        } catch {
            setError("Could not reset password. The code may be invalid or expired.");
        } finally {
            setLoading(false);
        }
    }

    const inputClass =
        "bg-neutral-950 border border-neutral-700 outline-none px-3 py-2 text-sm text-neutral-100 normal-case";
    const buttonClass =
        "px-5 py-2.5 bg-yellow-400 hover:bg-yellow-300 disabled:opacity-50 text-black font-extrabold uppercase text-xs tracking-wider border-2 border-yellow-500";

    return (
        <main className="flex-1 w-full max-w-md mx-auto px-6 py-12 flex flex-col gap-6">
            <h2 className="text-xl font-extrabold uppercase tracking-widest text-yellow-400">
                Forgot Password
            </h2>

            {success ? (
                <div className="flex flex-col gap-4 bg-neutral-900 border border-neutral-800 p-6">
                    <p className="text-sm text-neutral-100">
                        Your password has been reset. You can now log in with your new password.
                    </p>
                    <Link href="/" className={`${buttonClass} text-center`}>
                        Go to Home
                    </Link>
                </div>
            ) : step === "username" ? (
                <form
                    onSubmit={handleSendCode}
                    className="flex flex-col gap-4 bg-neutral-900 border border-neutral-800 p-6"
                >
                    <label className="flex flex-col gap-2 text-xs uppercase tracking-wider text-neutral-300">
                        Username
                        <input
                            type="text"
                            name="username"
                            required
                            autoComplete="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="your username"
                            className={inputClass}
                        />
                    </label>
                    {error && <p className="text-xs text-red-400">{error}</p>}
                    <button type="submit" disabled={loading} className={buttonClass}>
                        {loading ? "Sending..." : "Send Reset Code"}
                    </button>
                </form>
            ) : (
                <form
                    onSubmit={handleVerifyCode}
                    className="flex flex-col gap-4 bg-neutral-900 border border-neutral-800 p-6"
                >
                    <p className="text-xs text-neutral-400">
                        We sent a code for <span className="text-neutral-100">{username}</span>.
                        Enter it below.
                    </p>
                    <label className="flex flex-col gap-2 text-xs uppercase tracking-wider text-neutral-300">
                        Reset Code
                        <input
                            type="text"
                            name="code"
                            required
                            inputMode="numeric"
                            autoComplete="one-time-code"
                            maxLength={6}
                            value={code}
                            onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
                            placeholder="123456"
                            className={`${inputClass} tracking-[0.4em] text-center`}
                        />
                    </label>
                    <label className="flex flex-col gap-2 text-xs uppercase tracking-wider text-neutral-300">
                        New Password
                        <input
                            type="password"
                            name="password"
                            required
                            autoComplete="new-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="*********"
                            className={inputClass}
                        />
                    </label>
                    <label className="flex flex-col gap-2 text-xs uppercase tracking-wider text-neutral-300">
                        Confirm Password
                        <input
                            type="password"
                            name="confirmPassword"
                            required
                            autoComplete="new-password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="*********"
                            className={inputClass}
                        />
                    </label>
                    {error && <p className="text-xs text-red-400">{error}</p>}
                    <button type="submit" disabled={loading} className={buttonClass}>
                        {loading ? "Resetting..." : "Reset Password"}
                    </button>
                    <div className="flex justify-between text-xs uppercase tracking-widest text-neutral-400">
                        <button
                            type="button"
                            onClick={() => {
                                setStep("username");
                                setCode("");
                                setPassword("");
                                setConfirmPassword("");
                                setError("");
                            }}
                            className="hover:text-yellow-400"
                        >
                            Change username
                        </button>
                        <button
                            type="button"
                            onClick={handleSendCode}
                            disabled={loading}
                            className="hover:text-yellow-400"
                        >
                            Resend code
                        </button>
                    </div>
                </form>
            )}

            <Link href="/" className="text-xs text-neutral-400 hover:text-yellow-400 uppercase tracking-widest">
                ← Back to home
            </Link>
        </main>
    );
}