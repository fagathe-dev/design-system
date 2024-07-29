const $ = (selector) => {
    const result = document.querySelectorAll(selector);
    if (result.length === 1) {
        return result[0];
    }
    if (result instanceof NodeList && result.length > 1) {
        return result;
    }
    return undefined;
};
//# sourceMappingURL=index.js.map