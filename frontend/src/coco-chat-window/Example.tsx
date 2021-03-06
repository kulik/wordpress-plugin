import React, {useState, useEffect} from "react";
import {ChatEntry} from "@conversationalcomponents/chat-window/types";
import {useUserTyping, useBotTyping, ChatWindow} from "@conversationalcomponents/chat-window";

const botReplies = ["Wow!", "Fascinating, please do go on", "Amazing!", "Really?", "If you say so..."];
const getBotReply = () => botReplies[Math.floor(Math.random() * botReplies.length)];
const userAvatar = "https://img.icons8.com/color/search/0";
const botAvatar = "https://img.icons8.com/color/search/1";

export const Example = () => {
    const [content, setContent] = useState<ChatEntry[]>([]);
    const [lastInputValue, setLastInputValue] = useState("");
    const [lastUnsubmittedInput, setLastUnsubmittedInput] = useState("");

    useEffect(() => {
        const lastEntry = content.length && content[content.length - 1];
        if (!lastEntry || lastEntry.isUser) return;
        setLastInputValue("");
    }, [content]);

    useEffect(() => {
        lastInputValue && setLastUnsubmittedInput("");
    }, [lastInputValue]);

    useUserTyping(content, setContent, lastUnsubmittedInput, lastInputValue, userAvatar);
    const isBotDoneTyping = useBotTyping(content, setContent, lastInputValue, botAvatar);

    useEffect(() => {
        if (!isBotDoneTyping) return;
        const lastEntry = content.length && content[content.length - 1];
        if (!lastEntry || lastEntry.isUser) return;
        lastEntry.message = getBotReply();
        lastEntry.isLoading = false;
    }, [isBotDoneTyping]);

    return (
        <ChatWindow
            headerAdditionalContent={<div style={{flex: 1, display: "flex", justifyContent: "center"}}>HEADER</div>}
            content={content}
            onChange={(text: string) => setLastUnsubmittedInput(text)}
            onSubmit={(text: string) => setLastInputValue(text)}
        />
    );
};
