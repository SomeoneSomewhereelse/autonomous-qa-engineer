// Hashes a plaintext password using bcrypt with 10 salt rounds
async function hashPassword(password) {
    return await bcrypt.hash(password, 10);
}

const generateToken = (userId, role) => {
    return jwt.sign({ userId, role }, process.env.JWT_SECRET, { expiresIn: '8h' });
};

/* Verifies a JWT token and returns the decoded payload.
   Throws if the token is expired or tampered with. */
function verifyToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET);
}

async function logout(sessionId) {
    await db.sessions.delete({ where: { id: sessionId } });
}
