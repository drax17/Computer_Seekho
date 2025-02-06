package com.project.Services;

import org.springframework.stereotype.Component;

import jakarta.mail.Message;
import jakarta.mail.Multipart;
import jakarta.mail.PasswordAuthentication;
import jakarta.mail.Session;
import jakarta.mail.Transport;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeBodyPart;
import jakarta.mail.internet.MimeMessage;
import jakarta.mail.internet.MimeMultipart;

import java.util.Properties;
import java.nio.file.Files;
import java.nio.file.Paths;

@Component
public class MailSender {

    public void sendMail(String to, String studentName) {
        final String password = "uqknkgmutwmxuxju";
        final String emailId = "computerseekho2025@gmail.com";

        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");

        Session session = Session.getInstance(props, new jakarta.mail.Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(emailId, password);
            }
        });

        try {
            MimeMessage message = new MimeMessage(session);
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(to));
            message.setSubject("Confirmation of Admission in Computer Seekho");
            
            String emailTemplate = new String(Files.readAllBytes(Paths.get("src/main/resources/emailTemplate.html")));
            
            emailTemplate = emailTemplate.replace("${studentName}", studentName);

            MimeBodyPart htmlMimeBodyPart = new MimeBodyPart();
            htmlMimeBodyPart.setContent(emailTemplate, "text/html");

            Multipart multipart = new MimeMultipart();
            multipart.addBodyPart(htmlMimeBodyPart);

            message.setContent(multipart);
            Transport.send(message);

        } catch (Exception e) {
            System.out.println("There was a problem sending the email");
        }
    }
}
