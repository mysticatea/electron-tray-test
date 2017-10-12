/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * @copyright 2017 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

const path = require("path")
const { Tray, app } = require("electron")

const ICON_PATH = path.join(__dirname, "star.ico")

app.on("ready", () => {
    const tray = new Tray(ICON_PATH)
    tray.displayBalloon({
        icon: ICON_PATH,
        title: "Hello",
        content: "Icon test."
    })

    tray.on("balloon-click", () => {
        app.quit()
    })
    tray.on("balloon-closed", () => {
        app.quit()
    })
})
