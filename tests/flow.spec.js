import { test, expect } from '@playwright/test';

const DAY = 'ContentPlaceHolder1_CalendarExtender2_day_3_4';
const PLAYERS = [

];
const HOURS = [
    //'ContentPlaceHolder1_GridViewReservasGolfCampo1_btnHora_4',
    'ContentPlaceHolder1_GridViewReservasGolfCampo3_btnHora_0',
    'ContentPlaceHolder1_GridViewReservasGolfCampo3_btnHora_5',
    'ContentPlaceHolder1_GridViewReservasGolfCampo3_btnHora_6',
    'ContentPlaceHolder1_GridViewReservasGolfCampo3_btnHora_7',
    'ContentPlaceHolder1_GridViewReservasGolfCampo3_btnHora_8',
    'ContentPlaceHolder1_GridViewReservasGolfCampo3_btnHora_13',
    'ContentPlaceHolder1_GridViewReservasGolfCampo3_btnHora_14',
    'ContentPlaceHolder1_GridViewReservasGolfCampo3_btnHora_15',
    'ContentPlaceHolder1_GridViewReservasGolfCampo3_btnHora_16',
    'ContentPlaceHolder1_GridViewReservasGolfCampo3_btnHora_17',
    'ContentPlaceHolder1_GridViewReservasGolfCampo3_btnHora_18',
    'ContentPlaceHolder1_GridViewReservasGolfCampo3_btnHora_19',
    'ContentPlaceHolder1_GridViewReservasGolfCampo3_btnHora_20',
    'ContentPlaceHolder1_GridViewReservasGolfCampo3_btnHora_12',
    'ContentPlaceHolder1_GridViewReservasGolfCampo3_btnHora_13',
    'ContentPlaceHolder1_GridViewReservasGolfCampo3_btnHora_14',
    'ContentPlaceHolder1_GridViewReservasGolfCampo3_btnHora_15',
    'ContentPlaceHolder1_GridViewReservasGolfCampo3_btnHora_16',
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


const fn =  async (page, cb) => {
    let isOk = false
    console.log('hola que tal')

    await page.locator('#ContentPlaceHolder1_btnBuscar').click()

    for (const hour of HOURS) {
        try {
            let value = await page.locator('#'+hour);

            if (value.getAttribute('value') != '') {
                console.log({value, hour})
                isOk = true

                await page.locator('#'+hour).click();
                await page.getByRole('button',{name:'Aceptar' }).click();

                continue
            }
        } catch (e) {
            cb(page, cb)
        }
    }
    if (!isOk) {
        cb(page, cb)
    }

    await delay(40000);
}

test('test', async ({ page }) => {
    console.log(process.env.TOKEN)

    await page.goto('https://www.realclublamoraleja.net/nuevareservadegolf?GLMT=' + process.env.TOKEN);

    await page.locator('#ContentPlaceHolder1_tbFecha').click();
    await page.getByText('17', { exact: true }).click();
    for (const player of PLAYERS) {
        const index = PLAYERS.indexOf(player);
        await page.locator(`#ContentPlaceHolder1_tbJug${+index + 2}`).fill(player);
    }

    await fn(page, fn)

});
