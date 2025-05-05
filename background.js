chrome.action.onClicked.addListener(() => {
    chrome.windows.create({
      url: "https://admin.microsoft.com/",
      incognito: true
    });
  });
  