import pool from "@/lib/db";
import bcrypt from "bcrypt";
import { gerarToken } from "@/lib/auth";
import { getRedirectError } from "next/dist/client/components/redirect";

export async function POST(req) {
    const { email, perfil, senha } = await req.json();

      const result = await pool.query( `SELECT * FROM usuarios WHERE email = $1 AND perfil = $2`,[email, perfil] );


    const user = result.rows[0];

    if (!user) return Response.json({ error: "Usuario não Encontrado"},
    {status: 404});

    const ok = await bcrypt.compare(senha, user.senha);

    if (!ok) return Response.json({ error: "Senha Invalida"},
    {status: 401});

    const token = gerarToken({ id: user.id});

    return Response.json({ token });
}