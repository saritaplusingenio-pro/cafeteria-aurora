"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type SubmitStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMsg(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setErrorMsg("Por favor, completa todos los campos.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        setStatus("error");
        setErrorMsg(data.error ?? "No se pudo enviar el mensaje.");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorMsg("Error de conexión. Inténtalo de nuevo.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="name">Nombre</Label>
        <Input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="message">Mensaje</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>

      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Enviando..." : "Enviar mensaje"}
      </Button>

      {status === "success" && (
        <p role="status" className="text-sm text-green-700">
          ¡Gracias! Tu mensaje ha sido enviado correctamente.
        </p>
      )}

      {status === "error" && errorMsg && (
        <p role="alert" className="text-sm text-red-700">
          {errorMsg}
        </p>
      )}
    </form>
  );
}
