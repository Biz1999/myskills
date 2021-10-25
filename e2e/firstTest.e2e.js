describe("Meus primeiros testes", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should have welcome screen", async () => {
    await expect(element(by.id("welcome"))).toBeVisible();
  });

  it("check register new skill", async () => {
    const inputNewSkill = await element(by.id("input-new"));
    const buttonAdd = await element(by.id("button-add"));
    const flatlistSkills = await element(by.id("flatlist-skills"));

    await inputNewSkill.tap();
    await inputNewSkill.typeText("React Native");

    await buttonAdd.tap();
  });
});