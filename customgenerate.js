var customButton = document.getElementById("customButton");


function updateButtonBg() {
    const buttonBg = document.getElementById("buttonBg").value;

    customButton.style.backgroundColor = buttonBg;
}

function updateButtonText() {
    const textinput = document.getElementById("buttonText").value;

    customButton.textContent = textinput;
}

function updateButtonFont() {
    const fontfamily = document.getElementById("Buttonfontfamily").value;

    switch (fontfamily) {
        case "TimesNewRoman": customButton.style.fontFamily = "Times New Roman";
            break;

        case "Arial": customButton.style.fontFamily = "Arial";
            break;

        case "Georgia": customButton.style.fontFamily = "Georgia";
            break;

        case "CourierNew": customButton.style.fontFamily = "Courier New";
            break;

        default: customButton.style.fontFamily = "Times New Roman";
    }
}

function updateButtonFontsize() {
    const fontSize = document.getElementById("ButtonfontSize").value;

    customButton.style.fontSize = fontSize + "px";
}

function updateButtonFontColor() {
    const buttonFontColor = document.getElementById("buttonFontColor").value;

    customButton.style.color = buttonFontColor;
}

function updateButtonFontWeight() {
    const fontWeight = document.getElementById("ButtonfontWeight").value;

    switch (fontWeight) {
        case "100": customButton.style.fontWeight = 100;
            break;

        case "200": customButton.style.fontWeight = 200;
            break;

        case "300": customButton.style.fontWeight = 300;
            break;

        case "400": customButton.style.fontWeight = 400;
            break;

        case "500": customButton.style.fontWeight = 500;
            break;

        case "600": customButton.style.fontWeight = 600;
            break;

        case "700": customButton.style.fontWeight = 700;
            break;

        case "800": customButton.style.fontWeight = 800;
            break;

        case "900": customButton.style.fontWeight = 900;
            break;

        case "bold": customButton.style.fontWeight = "bold";
            break;

        case "bolder": customButton.style.fontWeight = "bolder";
            break;

        case "lighter": customButton.style.fontWeight = "lighter";
            break;

        default: customButton.style.fontWeight = 300;
    }
}

function updateButtonFontWeight2(button) {
    button.classList.toggle('blockButtonElavated');
    const isBlockButtonElevated = button.classList.contains('blockButtonElavated');

    customButton.style.fontWeight = isBlockButtonElevated ? 'bold' : 'normal';
}

function updateButtonFontStyle(button) {
    button.classList.toggle('italicButtonElavated');
    const isItalicButtonElevated = button.classList.contains('italicButtonElavated');

    customButton.style.fontStyle = isItalicButtonElevated ? 'italic' : 'normal';
}

function updateButtonFontDecoration(button) {
    button.classList.toggle('underlinedButtonElavated');
    const isUnderlinedButtonElevated = button.classList.contains('underlinedButtonElavated');

    customButton.style.textDecoration = isUnderlinedButtonElevated ? 'underline' : 'none';
}

function updateButtonBorder() {
    const ButtonBorder = document.getElementById("ButtonBorder");
    const ButtonBorderContainer = document.getElementById("ButtonBorderContainer");

    if (ButtonBorder.checked) {
        ButtonBorderContainer.style.display = "flex";
        customButton.style.border = "1px solid #000000"
    } else {
        ButtonBorderContainer.style.display = "none";
        customButton.style.border = "none"
    }
}

function updateButtonBorderColor() {
    const buttonBorderColor = document.getElementById("buttonBorderColor").value;

    customButton.style.borderColor = buttonBorderColor;
}

function updateButtonBorderStyle() {
    const ButtonBorderStyle = document.getElementById("ButtonBorderStyle").value;

    switch (ButtonBorderStyle) {
        case "Solid": customButton.style.borderStyle = "Solid";
            break;

        case "Dashed": customButton.style.borderStyle = "Dashed";
            break;

        case "Double": customButton.style.borderStyle = "Double";
            break;

        case "Dotted": customButton.style.borderStyle = "Dotted";
            break;

        case "Inset": customButton.style.borderStyle = "Inset";
            break;

        case "Outset": customButton.style.borderStyle = "Outset";
            break;

        case "Ridge": customButton.style.borderStyle = "Ridge";
            break;

        default: customButton.style.borderStyle = "Solid";
    }
}

function updateButtonBorderThickness() {
    const ButtonBorderThickness = document.getElementById("ButtonBorderThickness").value + "px";

    customButton.style.borderWidth = ButtonBorderThickness;
}

function updateButtonPaddingTop() {
    const ButtonPaddingTop = document.getElementById("ButtonPaddingTop").value + "px";

    customButton.style.paddingTop = ButtonPaddingTop;
}

function updateButtonPaddingRight() {
    const ButtonPaddingRight = document.getElementById("ButtonPaddingRight").value + "px";

    customButton.style.paddingRight = ButtonPaddingRight;
}

function updateButtonPaddingBottom() {
    const ButtonPaddingBottom = document.getElementById("ButtonPaddingBottom").value + "px";

    customButton.style.paddingBottom = ButtonPaddingBottom;
}

function updateButtonPaddingLeft() {
    const ButtonPaddingLeft = document.getElementById("ButtonPaddingLeft").value + "px";

    customButton.style.paddingLeft = ButtonPaddingLeft;
}

function buttonBorderRadius() {
    const buttonBorderRadius = document.getElementById("buttonBorderRadius").value + "px";

    customButton.style.borderRadius = buttonBorderRadius;
}

function updateButtonShadow() {
    const ButtonShadow = document.getElementById("ButtonShadow");
    const ButtonShadowContainer = document.getElementById("ButtonShadowContainer");

    if (ButtonShadow.checked) {
        ButtonShadowContainer.style.display = "flex";
        customButton.style.boxShadow = "0px 0px 10px 0px #000000";
    } else {
        ButtonShadowContainer.style.display = "none";
        customButton.style.boxShadow = "none";
    }

}

function updateButtonShadowType() {
    const buttonShadowType = document.getElementById("ButtonShadowType").value;
    const customButton = document.getElementById("customButton");

    customButton.style.boxShadow = buttonShadowType === "Inset" ? "inset 0px 0px 10px 0px #000000" : "0px 0px 10px 0px #000000";
}

function updateButtonShadowXoffset() {
    const customButton = document.getElementById("customButton");

    customButton.style.boxShadow = getButtonShadowStyle();
}

function updateButtonShadowYoffset() {
    const customButton = document.getElementById("customButton");

    customButton.style.boxShadow = getButtonShadowStyle();
}

function updateButtonShadowBlur() {
    const customButton = document.getElementById("customButton");

    customButton.style.boxShadow = getButtonShadowStyle();
}

function updateButtonShadowSpread() {
    const customButton = document.getElementById("customButton");

    customButton.style.boxShadow = getButtonShadowStyle();
}

function updateButtonShadowColor() {
    const customButton = document.getElementById("customButton");

    customButton.style.boxShadow = getButtonShadowStyle();
}

function updateButtonShadowColorOpacity() {
    const customButton = document.getElementById("customButton");

    customButton.style.boxShadow = getButtonShadowStyle();
}

function getButtonShadowStyle() {
    const xoffset = document.getElementById("buttonShadowXoffset").value;
    const yoffset = document.getElementById("buttonShadowYoffset").value;
    const blur = document.getElementById("buttonShadowBlur").value;
    const spread = document.getElementById("buttonShadowSpread").value;
    const color = document.getElementById("buttonShadowColor").value;
    const colorOpacity = document.getElementById("buttonShadowColorOpacity").value;

    return `${xoffset}px ${yoffset}px ${blur}px ${spread}px rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, ${colorOpacity})`;
}


function generateCode() {
    var computedStyles = window.getComputedStyle(customButton);
    document.getElementById("customBtnCode").style.display = "flex";
    var backgroundColor = computedStyles.backgroundColor;
    var borderRadius = computedStyles.borderRadius;
    var fontFamily = computedStyles.fontFamily;
    var fontSize = computedStyles.fontSize;
    var color = computedStyles.color;
    var fontWeight = computedStyles.fontWeight;
    var fontStyle = computedStyles.fontStyle;
    var textDecoration = computedStyles.textDecoration;
    var border = computedStyles.border;
    var paddingTop = computedStyles.paddingTop;
    var paddingRight = computedStyles.paddingRight;
    var paddingBottom = computedStyles.paddingBottom;
    var paddingLeft = computedStyles.paddingLeft;
    var boxShadow = computedStyles.boxShadow;

    var styleText = `
.customButton {
background-color: ${backgroundColor};
color: ${color};
border-radius:${borderRadius};
font-family: ${fontFamily};
font-size: ${fontSize};
font-weight: ${fontWeight};
font-style: ${fontStyle};
text-decoration: ${textDecoration};
border: ${border};
padding-top: ${paddingTop};
padding-right: ${paddingRight};
padding-bottom: ${paddingBottom};
padding-left: ${paddingLeft};
box-shadow: ${boxShadow};
transition:${hoverTransition};
}
    `;

    var textToCopy2 = document.getElementById("textToCopy2");
    textToCopy2.textContent = styleText;

}


var hoverTransform = 'scale(1)'

function updateButtonScale() {
    const ButtonScale = document.getElementById("ButtonScale").value;

    customButton.addEventListener("mouseenter", function () {
        customButton.style.transform = `scale(${ButtonScale})`;
    })

    customButton.addEventListener("mouseleave", function () {
        customButton.style.transform = `scale(1)`;
    })

    hoverTransform = `scale(${ButtonScale})`;
}

var hoverTransition = "0s";

function updateButtonHoverTransition() {
    const ButtonTransition = document.getElementById("ButtonTransition").value + "s";

    customButton.addEventListener("mouseenter", function () {
        customButton.style.transition = ButtonTransition;
    })

    customButton.addEventListener("mouseleave", function () {
        customButton.style.transition = ButtonTransition;
    })

    hoverTransition = ButtonTransition;
}

var buttonBg = document.getElementById("buttonBg").value;

var hoverBg = buttonBg;

function updateButtonHoverBg() {
    const ButtonHoverbg = document.getElementById("ButtonHoverbg").value;
    const buttonBg = document.getElementById("buttonBg").value;

    customButton.addEventListener("mouseenter", function () {
        customButton.style.backgroundColor = ButtonHoverbg;
    })

    customButton.addEventListener("mouseleave", function () {
        customButton.style.backgroundColor = buttonBg;
    })

    hoverBg = ButtonHoverbg;
}

var buttonFontColor = document.getElementById("buttonFontColor").value;
var hoverFontColor = buttonFontColor;

function updateButtonHoverFontColor() {
    const ButtonHoverFontColor = document.getElementById("ButtonHoverFontColor").value;
    const buttonFontColor = document.getElementById("buttonFontColor").value;

    customButton.addEventListener("mouseenter", function () {
        customButton.style.color = ButtonHoverFontColor;
    })

    customButton.addEventListener("mouseleave", function () {
        customButton.style.color = buttonFontColor;
    })

    hoverFontColor = ButtonHoverFontColor;
}



function updateButtonHoverShadow() {
    const ButtonHoverShadow = document.getElementById("ButtonHoverShadow");
    const ButtonHoverShadowContainer = document.getElementById("ButtonHoverShadowContainer");
    const customButton = document.getElementById("customButton");

    if (ButtonHoverShadow.checked) {
        ButtonHoverShadowContainer.style.display = "flex";
        customButton.addEventListener("mouseenter", function () {
            customButton.style.boxShadow = getButtonShadowStyle();
        });
        customButton.addEventListener("mouseleave", function () {
            if (document.getElementById("ButtonShadow").checked) {
                customButton.style.boxShadow = getButtonShadowStyle();
            } else {
                customButton.style.boxShadow = "none";
            }
        });
    } else {
        ButtonHoverShadowContainer.style.display = "none";
        customButton.addEventListener("mouseenter", function () {
            customButton.style.boxShadow = "none";
        });
        customButton.addEventListener("mouseleave", function () {
            if (document.getElementById("ButtonShadow").checked) {
                customButton.style.boxShadow = getButtonShadowStyle();
            } else {
                customButton.style.boxShadow = "none";
            }
        });
    }

    ButtonHoverShadow.addEventListener("change", function () {
        if (ButtonHoverShadow.checked) {
            ButtonHoverShadowContainer.style.display = "flex";
        } else {
            ButtonHoverShadowContainer.style.display = "none";
            customButton.style.boxShadow = "none";
        }
    });
}


function updateButtonHoverShadowType() {
    const buttonHoverShadowType = document.getElementById("ButtonHoverShadowType").value;

    customButton.addEventListener("mouseenter", function () {
        customButton.style.boxShadow = buttonHoverShadowType === "Inset" ? "inset 0px 0px 10px 0px #000000" : "0px 0px 10px 0px #000000";
    });
}

function updateButtonHoverShadowXoffset() {
    const xoffset = document.getElementById("buttonHoverShadowXoffset").value;

    customButton.addEventListener("mouseenter", function () {
        customButton.style.boxShadow = getButtonHoverShadowStyle(xoffset);
    });
}

function updateButtonHoverShadowYoffset() {
    const yoffset = document.getElementById("buttonHoverShadowYoffset").value;

    customButton.addEventListener("mouseenter", function () {
        customButton.style.boxShadow = getButtonHoverShadowStyle(null, yoffset);
    });
}

function updateButtonHoverShadowBlur() {
    const blur = document.getElementById("buttonHoverShadowBlur").value;

    customButton.addEventListener("mouseenter", function () {
        customButton.style.boxShadow = getButtonHoverShadowStyle(null, null, blur);
    });
}

function updateButtonHoverShadowSpread() {
    const spread = document.getElementById("buttonHoverShadowSpread").value;

    customButton.addEventListener("mouseenter", function () {
        customButton.style.boxShadow = getButtonHoverShadowStyle(null, null, null, spread);
    });
}

function updateButtonHoverShadowColor() {
    const color = document.getElementById("buttonHoverShadowColor").value;

    customButton.addEventListener("mouseenter", function () {
        customButton.style.boxShadow = getButtonHoverShadowStyle(null, null, null, null, color);
    });
}

function updateButtonHoverShadowColorOpacity() {
    const colorOpacity = document.getElementById("buttonHoverShadowColorOpacity").value;

    customButton.addEventListener("mouseenter", function () {
        customButton.style.boxShadow = getButtonHoverShadowStyle(null, null, null, null, null, colorOpacity);
    });
}

function getButtonHoverShadowStyle(xoffset, yoffset, blur, spread, color, colorOpacity) {
    const defaultXoffset = xoffset || document.getElementById("buttonHoverShadowXoffset").value;
    const defaultYoffset = yoffset || document.getElementById("buttonHoverShadowYoffset").value;
    const defaultBlur = blur || document.getElementById("buttonHoverShadowBlur").value;
    const defaultSpread = spread || document.getElementById("buttonHoverShadowSpread").value;
    const defaultColor = color || document.getElementById("buttonHoverShadowColor").value;
    const defaultColorOpacity = colorOpacity || document.getElementById("buttonHoverShadowColorOpacity").value;
    const ButtonHoverShadowType = document.getElementById("ButtonHoverShadowType").value;

    if( ButtonHoverShadowType == "inset"){
        return `inset ${defaultXoffset}px ${defaultYoffset}px ${defaultBlur}px ${defaultSpread}px rgba(${parseInt(defaultColor.slice(1, 3), 16)}, ${parseInt(defaultColor.slice(3, 5), 16)}, ${parseInt(defaultColor.slice(5, 7), 16)}, ${defaultColorOpacity})`;
    }else{
        return `${defaultXoffset}px ${defaultYoffset}px ${defaultBlur}px ${defaultSpread}px rgba(${parseInt(defaultColor.slice(1, 3), 16)}, ${parseInt(defaultColor.slice(3, 5), 16)}, ${parseInt(defaultColor.slice(5, 7), 16)}, ${defaultColorOpacity})`;
    }
}

updateButtonHoverShadow();

function updateButtonHoverBorder() {
    const ButtonHoverBorder = document.getElementById("ButtonHoverBorder");
    const ButtonBorderHoverContainer = document.getElementById("ButtonBorderHoverContainer");
    const customButton = document.getElementById("customButton");

    if (ButtonHoverBorder.checked) {
        ButtonBorderHoverContainer.style.display = "flex";
        customButton.addEventListener("mouseenter", function () {
            customButton.style.border = getButtonBorderStyles();
        });
        customButton.addEventListener("mouseleave", function () {
            if (document.getElementById("ButtonBorder").checked) {
                customButton.style.border = getButtonBorderStyles();
            } else {
                customButton.style.border = "none";
            }
        });
    } else {
        ButtonBorderHoverContainer.style.display = "none";
        customButton.addEventListener("mouseenter", function () {
            customButton.style.border = "none";
        });
        customButton.addEventListener("mouseleave", function () {
            if (document.getElementById("ButtonBorder").checked) {
                customButton.style.border = getButtonBorderStyles();
            } else {
                customButton.style.border = "none";
            }
        });
    }

    ButtonHoverBorder.addEventListener("change", function () {
        if (ButtonHoverBorder.checked) {
            ButtonBorderHoverContainer.style.display = "flex";
        } else {
            ButtonBorderHoverContainer.style.display = "none";
            customButton.style.border = "none";
        }
    });
}

function getButtonBorderStyles() {
    const borderColor = updateButtonBorderColor();
    const borderStyle = updateButtonBorderStyle();
    const borderThickness = updateButtonBorderThickness();
    return `${borderThickness} ${borderStyle} ${borderColor}`;
}


function updateButtonHoverBorderColor() {
    const buttonHoverBorderColor = document.getElementById("buttonHoverBorderColor").value;

    customButton.addEventListener("mouseenter", function () {
        customButton.style.borderColor = buttonHoverBorderColor;
    })
}

function updateButtonHoverBorderStyle() {
    const ButtonHoverBorderStyle = document.getElementById("ButtonHoverBorderStyle").value;

    customButton.addEventListener("mouseenter", function () {
        switch (ButtonHoverBorderStyle) {
            case "Solid": customButton.style.borderStyle = "Solid";
                break;

            case "Dashed": customButton.style.borderStyle = "Dashed";
                break;

            case "Double": customButton.style.borderStyle = "Double";
                break;

            case "Dotted": customButton.style.borderStyle = "Dotted";
                break;

            case "Inset": customButton.style.borderStyle = "Inset";
                break;

            case "Outset": customButton.style.borderStyle = "Outset";
                break;

            case "Ridge": customButton.style.borderStyle = "Ridge";
                break;

            default: customButton.style.borderStyle = "Solid";
        }
    })

}

function updateButtonHoverBorderThickness() {
    const ButtonHoverBorderThickness = document.getElementById("ButtonHoverBorderThickness").value + "px";

    customButton.addEventListener("mouseenter", function () {
        customButton.style.borderWidth = ButtonHoverBorderThickness;
    })
}

updateButtonHoverBorder();

function closeCodeSection() {
    document.getElementById("customBtnCode").style.display = "none";
}

function copyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
}

document.getElementById('copyHtml').addEventListener('click', function () {
    const textToCopy = document.getElementById('textToCopy1').textContent;
    copyTextToClipboard(textToCopy);
});

document.getElementById('copyNormalCss').addEventListener('click', function () {
    const textToCopy = document.getElementById('textToCopy2').textContent;
    copyTextToClipboard(textToCopy);
});

document.getElementById('copyHoverCss').addEventListener('click', function () {
    const textToCopy = document.getElementById('textToCopy3').textContent;
    copyTextToClipboard(textToCopy);
});



function generateCode2() {
    var ButtonHoverShadow = document.getElementById("ButtonHoverShadow");
    var defaultXoffset = document.getElementById("buttonHoverShadowXoffset").value;
    var defaultYoffset = document.getElementById("buttonHoverShadowYoffset").value;
    var defaultBlur = document.getElementById("buttonHoverShadowBlur").value;
    var defaultSpread = document.getElementById("buttonHoverShadowSpread").value;
    var defaultColor = document.getElementById("buttonHoverShadowColor").value;
    var defaultColorOpacity = document.getElementById("buttonHoverShadowColorOpacity").value;
    var ButtonHoverShadowType = document.getElementById("ButtonHoverShadowType").value;
    var ButtonHoverBorder = document.getElementById("ButtonHoverBorder");
    var buttonHoverBorderColor = document.getElementById("buttonHoverBorderColor").value;
    var ButtonHoverBorderStyle = document.getElementById("ButtonHoverBorderStyle").value;
    var ButtonHoverBorderThickness = document.getElementById("ButtonHoverBorderThickness").value + "px";
    var hoverShadow = "";

    if (ButtonHoverShadow.checked) {
        hoverShadow = ButtonHoverShadowType === "Inset" ? `inset ${defaultXoffset}px ${defaultYoffset}px ${defaultBlur}px ${defaultSpread}px rgba(${parseInt(defaultColor.slice(1, 3), 16)}, ${parseInt(defaultColor.slice(3, 5), 16)}, ${parseInt(defaultColor.slice(5, 7), 16)}, ${defaultColorOpacity})`:`${defaultXoffset}px ${defaultYoffset}px ${defaultBlur}px ${defaultSpread}px rgba(${parseInt(defaultColor.slice(1, 3), 16)}, ${parseInt(defaultColor.slice(3, 5), 16)}, ${parseInt(defaultColor.slice(5, 7), 16)}, ${defaultColorOpacity})`;
    } else {
        hoverShadow = "none";
    }

    if(ButtonHoverBorder.checked){
        hoverBorder = `${ButtonHoverBorderThickness} ${ButtonHoverBorderStyle} ${buttonHoverBorderColor}`
    }else {
        hoverBorder = "none";
    }

    var styleText = `
.customButton:hover {
transform:${hoverTransform};
transition:${hoverTransition};
background-color: ${hoverBg};
color: ${hoverFontColor};
box-shadow: ${hoverShadow};
border: ${hoverBorder};
}`;

    var textToCopy3 = document.getElementById("textToCopy3");
    textToCopy3.textContent = styleText;
}
