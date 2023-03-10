import { test, expect } from '@playwright/test';

const DAY = 'ContentPlaceHolder1_CalendarExtender2_day_3_4';
const PLAYERS = [
    '82199997',
    '8227'
];
const HOURS = [
    'ContentPlaceHolder1_GridViewReservasGolfCampo1_btnHora_12',
    'ContentPlaceHolder1_GridViewReservasGolfCampo1_btnHora_13',
    'ContentPlaceHolder1_GridViewReservasGolfCampo1_btnHora_14',
    'ContentPlaceHolder1_GridViewReservasGolfCampo1_btnHora_15',
    'ContentPlaceHolder1_GridViewReservasGolfCampo1_btnHora_16',
    'ContentPlaceHolder1_GridViewReservasGolfCampo1_btnHora_17',
    'ContentPlaceHolder1_GridViewReservasGolfCampo1_btnHora_18',
    'ContentPlaceHolder1_GridViewReservasGolfCampo1_btnHora_19',
    'ContentPlaceHolder1_GridViewReservasGolfCampo1_btnHora_20',
    'ContentPlaceHolder1_GridViewReservasGolfCampo2_btnHora_12',
    'ContentPlaceHolder1_GridViewReservasGolfCampo2_btnHora_13',
    'ContentPlaceHolder1_GridViewReservasGolfCampo2_btnHora_14',
    'ContentPlaceHolder1_GridViewReservasGolfCampo2_btnHora_15',
    'ContentPlaceHolder1_GridViewReservasGolfCampo2_btnHora_16',
    'ContentPlaceHolder1_GridViewReservasGolfCampo2_btnHora_17',
    'ContentPlaceHolder1_GridViewReservasGolfCampo2_btnHora_18',
    'ContentPlaceHolder1_GridViewReservasGolfCampo2_btnHora_19',
    'ContentPlaceHolder1_GridViewReservasGolfCampo2_btnHora_20'
];

function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time)
    });
}

test('test', async ({ page }) => {
    console.log(process.env.TOKEN)
    await page.goto('https://www.realclublamoraleja.net/nuevareservadegolf?GLMT=' + process.env.TOKEN);
    for (const player of PLAYERS) {
        const index = PLAYERS.indexOf(player);
        await page.locator(`#ContentPlaceHolder1_tbJug${+index + 2}`).fill(player);
    }
    await page.locator('#ContentPlaceHolder1_btnBuscar').click()

    for (const hour of HOURS) {
        let value = await page.locator('#'+hour).getAttribute('value');
        if (value != '') {
            console.log({value, hour})

            // hour.click();
        }
    }
    await delay(40000);

});
