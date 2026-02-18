document.querySelectorAll("pre").forEach((pre) => {
    if (pre.querySelector(".code-copy-btn")) {
        return;
    }

    const code = pre.querySelector("code");
    if (!code) {
        return;
    }

    const button = document.createElement("button");
    button.className = "code-copy-btn";
    button.type = "button";
    button.textContent = "Copy";

    button.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(code.innerText);
            button.textContent = "Copied";
            setTimeout(() => {
                button.textContent = "Copy";
            }, 1200);
        } catch (error) {
            button.textContent = "Failed";
            setTimeout(() => {
                button.textContent = "Copy";
            }, 1200);
        }
    });

    pre.appendChild(button);
});
