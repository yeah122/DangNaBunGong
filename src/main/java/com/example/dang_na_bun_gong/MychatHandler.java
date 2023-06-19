package com.example.dang_na_bun_gong;

import java.io.IOException;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

@Component
public class MychatHandler extends TextWebSocketHandler {
    private final Logger logger = LoggerFactory.getLogger(MychatHandler.class);
    private List<WebSocketSession> sessions = new CopyOnWriteArrayList();

    public MychatHandler() {
    }

    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        this.logger.info("Connected ... " + session.getId());
        this.sessions.add(session);
    }

    public void handleTextMessage(WebSocketSession session, TextMessage message) throws IOException {
        this.logger.info("Received message: " + (String)message.getPayload());
        Iterator var3 = this.sessions.iterator();

        while(var3.hasNext()) {
            WebSocketSession webSocketSession = (WebSocketSession)var3.next();
            webSocketSession.sendMessage(message);
        }

    }

    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        this.logger.info(String.format("Session %s closed because of %s", session.getId(), status.getReason()));
        this.sessions.remove(session);
    }
}
