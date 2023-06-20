// 5.Navigator Object:

// a. Write a JavaScript function that detects the user's browser name and version using the navigator object.

function getBrowserInfo() {
  const userAgent = navigator.userAgent;
  let browserName;
  let browserVersion;

  if (userAgent.indexOf("Firefox") > -1) {
    browserName = "Firefox";
    browserVersion = userAgent.match(/Firefox\/(\d+\.\d+)/)[1];
  } else if (userAgent.indexOf("Chrome") > -1) {
    browserName = "Chrome";
    browserVersion = userAgent.match(/Chrome\/(\d+\.\d+)/)[1];
  } else if (userAgent.indexOf("Safari") > -1) {
    browserName = "Safari";
    browserVersion = userAgent.match(/Version\/(\d+\.\d+)/)[1];
  } else if (userAgent.indexOf("Opera") > -1) {
    browserName = "Opera";
    browserVersion = userAgent.match(/OPR\/(\d+\.\d+)/)[1];
  } else if (userAgent.indexOf("Edge") > -1) {
    browserName = "Edge";
    browserVersion = userAgent.match(/Edge\/(\d+\.\d+)/)[1];
  } else if (userAgent.indexOf("Trident") > -1) {
    browserName = "Internet Explorer";
    browserVersion = userAgent.match(/rv:(\d+\.\d+)/)[1];
  } else {
    browserName = "Unknown";
    browserVersion = "Unknown";
  }

  return {
    name: browserName,
    version: browserVersion,
  };
}

// Example usage:
const browserInfo = getBrowserInfo();
console.log(`Browser Name: ${browserInfo.name}`);
console.log(`Browser Version: ${browserInfo.version}`);

// b. Implement the function to display the user's browser name and version.

function getBrowserInfo() {
  const userAgent = navigator.userAgent;
  let browserName;
  let browserVersion;

  // Code to detect browser name and version...

  return {
    name: browserName,
    version: browserVersion,
  };
}

// Example usage:
const info = getBrowserInfo();
console.log(`Browser Name: ${info.name}`);
console.log(`Browser Version: ${info.version}`);
