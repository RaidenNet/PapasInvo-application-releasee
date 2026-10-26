export async function resetCode(username: string) {
    const response = await fetch(`/api/auth/forgetPass`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
    });

    if (!response.ok) {
        throw new Error(`Failed to send reset code (status ${response.status})`);
    }

    // Some backends return an empty body, so handle both cases
    const text = await response.text();
    return text ? JSON.parse(text) : null;
}

export async function resetPassword(username: string, code: string, newPassword: string) {
    const response = await fetch(`/api/auth/resetPass`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, code, newPassword }),
    })
    if (!response.ok) {
        throw new Error(`Failed to send reset code (status ${response.status})`);
    }
}