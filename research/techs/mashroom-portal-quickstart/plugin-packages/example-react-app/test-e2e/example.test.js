// @flow

/*
 * Example Selenium/WebDriver tests that demonstrate how to use the Sandbox App to run an app with different configurations
 * and how to simulate and test the MessageBus communication.
 */

import "chromedriver";
import { Builder, By, until } from "selenium-webdriver";

const SANDBOX_BASE_URL = "http://localhost:5050/portal/web/sandbox";
const APP_NAME = "Example React App";

describe("Sample React App", () => {
    let driver;

    beforeEach(async () => {
        driver = await new Builder().forBrowser("chrome").build();
    });

    afterEach(() => {
        driver && driver.quit();
    });

    const loginAndWaitForApp = async () => {
        await driver.findElement(By.name("_username")).sendKeys("john");
        await driver.findElement(By.name("_password")).sendKeys("john");
        await driver.findElement(By.id("login-form-submit")).click();

        await driver.wait(
            until.elementLocated(By.className("example-react-app"))
        );
    };

    it("processes the config parameter name correctly", async () => {
        const name = "Maximilian";

        const appConfigParamValue = btoa(JSON.stringify({ name }));
        const url = `${SANDBOX_BASE_URL}?sbAppName=${APP_NAME}&sbAppConfig=${appConfigParamValue}`;
        await driver.get(url);

        await loginAndWaitForApp();

        const app = await driver.findElement(By.className("example-react-app"));
        const helloWorld = await app
            .findElement(By.xpath("//strong"))
            .getText();

        expect(helloWorld).toBe(`Hello ${name}!`);
    });

    it("publishes the correct message", async () => {
        const url = `${SANDBOX_BASE_URL}?sbAppName=${APP_NAME}`;
        await driver.get(url);

        await loginAndWaitForApp();

        // Publish message
        await driver
            .findElement(By.id("example-app-publish-some-message-link"))
            .click();

        const topic = await driver
            .findElement(By.id("mashroom-sandbox-app-published-by-app-1-topic"))
            .getText();
        const messageStr = await driver
            .findElement(
                By.id("mashroom-sandbox-app-published-by-app-1-message")
            )
            .getText();
        const message = JSON.parse(messageStr);

        expect(topic).toBe("to-all");
        expect(message).toEqual({
            foo: "bar",
        });
    });

    it("processes a subscribed message correctly", async () => {
        const url = `${SANDBOX_BASE_URL}?sbAppName=${APP_NAME}`;
        await driver.get(url);

        await loginAndWaitForApp();

        await driver
            .findElement(By.id("mashroom-sandbox-publish-message-topic"))
            .sendKeys("dummy-topic");
        await driver
            .findElement(By.id("mashroom-sandbox-publish-message-message"))
            .clear();
        await driver
            .findElement(By.id("mashroom-sandbox-publish-message-message"))
            .sendKeys('{ "test": "Test 1" }');
        await driver
            .findElement(By.id("mashroom-sandbox-publish-message"))
            .click();

        await driver.wait(
            until.elementLocated(By.id("example-app-received-data"))
        );

        const receivedMessageStr = await driver
            .findElement(By.id("example-app-received-data"))
            .getText();
        const receivedMessage = JSON.parse(receivedMessageStr);
        expect(receivedMessage).toEqual({
            test: "Test 1",
        });
    });
});
