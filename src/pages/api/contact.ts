import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';
import type { ContactFormData } from '../../features/contact/types/contact.interface';
import { createContactEmailTemplate, createAutoReplyTemplate } from '../../features/contact/templates/contact-template';

// Variables de entorno - probando ambos métodos
const emailTo = import.meta.env.SMTP_USER || import.meta.env.TO_EMAIL;
const emailPass = import.meta.env.SMTP_PASS || import.meta.env.SMTP_PASS;
const host = import.meta.env.SMTP_HOST || 'smtp.gmail.com';
const fromEmail = import.meta.env.FROM_EMAIL || emailTo;

console.log('=== Variables de entorno API ===');
console.log('host:', host);
console.log('emailTo:', emailTo);
console.log('fromEmail:', fromEmail);
console.log('emailPass:', emailPass ? '***CONFIGURADO***' : 'NO DEFINIDO');

export const POST: APIRoute = async ({ request }) => {
  console.log('=== Iniciando POST API ===');
  
  try {
    // Verificar que el request sea JSON
    if (request.headers.get('Content-Type') !== 'application/json') {
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Content-Type debe ser application/json' 
      }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Parsear datos del formulario
    const formData: ContactFormData = await request.json();
    console.log('FormData recibido:', { name: formData.name, email: formData.email });

    // Validar datos requeridos
    if (!formData.name || !formData.email || !formData.message) {
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Todos los campos son requeridos' 
      }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Formato de email inválido' 
      }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Crear transporter (como en el post)
    console.log('=== Creando transporter ===');
    const mailTransporter = nodemailer.createTransport({
      host: host,
      port: 587,
      secure: false, // como en el post
      auth: {
        user: emailTo,
        pass: emailPass,
      },
    });

    // Preparar email principal
    console.log('=== Preparando email principal ===');
    const mainMailDetails = {
      from: fromEmail,
      to: emailTo,
      subject: `💼 Nuevo mensaje de contacto de ${formData.name}`,
      html: createContactEmailTemplate(formData),
      replyTo: formData.email,
    };

    // COMENTADO TEMPORALMENTE - Solo para testing de velocidad
    /*
    const replyMailDetails = {
      from: fromEmail,
      to: formData.email,
      subject: '✨ Gracias por contactarme - Emilia Galarza',
      html: createAutoReplyTemplate(formData.name),
    };
    */

    // Enviar SOLO email principal para medir velocidad
    console.log('=== Enviando solo email principal ===');
    let mainResult;
    try {
      mainResult = await mailTransporter.sendMail(mainMailDetails);
      console.log('✅ Email principal enviado:', mainResult.messageId);

      return new Response(JSON.stringify({ 
        success: true, 
        message: '¡Mensaje enviado exitosamente! Te responderé pronto.',
        messageId: mainResult.messageId
      }), { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
      
    } catch (error) {
      console.error('Error enviando email:', error);
      throw error;
    }

    /* 
    // CÓDIGO ORIGINAL EN PARALELO - COMENTADO PARA TESTING
    let results;
    try {
      results = await Promise.allSettled([
        mailTransporter.sendMail(mainMailDetails),
        mailTransporter.sendMail(replyMailDetails)
      ]);
      
      const [mainResult, replyResult] = results;
      
      // Verificar resultado del email principal (crítico)
      if (mainResult.status === 'fulfilled') {
        console.log('✅ Email principal enviado:', mainResult.value.messageId);
      } else {
        console.error('❌ Error en email principal:', mainResult.reason);
        throw mainResult.reason;
      }
      
      // Verificar resultado del auto-reply (no crítico)
      if (replyResult.status === 'fulfilled') {
        console.log('✅ Auto-reply enviado:', replyResult.value.messageId);
      } else {
        console.warn('⚠️ Auto-reply falló (no crítico):', replyResult.reason);
      }

      return new Response(JSON.stringify({ 
        success: true, 
        message: '¡Mensaje enviado exitosamente! Te responderé pronto.',
        messageId: mainResult.value.messageId
      }), { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
      
    } catch (error) {
      console.error('Error enviando emails:', error);
      throw error;
    }
    */

  } catch (error) {
    console.error('=== API Error ===', error);
    return new Response(JSON.stringify({ 
      success: false, 
      message: 'Error interno del servidor' 
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};