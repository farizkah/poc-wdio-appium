describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await $('android=resourceId("com.flauschcode.broccoli:id/toolbar_recipes")').waitForDisplayed({
            timeout: 5000,
        })
        await $('android=resourceId("com.flauschcode.broccoli:id/fab_recipes")').click()
        await $('android=text("New Recipe")').waitForDisplayed({
            timeout: 5000,
        })
    })
})

