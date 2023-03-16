import { test, expect } from '@playwright/test';

const DAY = 'ContentPlaceHolder1_CalendarExtender2_day_3_4';
const PLAYERS = [

];
const HOURS = [
   // 'ContentPlaceHolder1_GridViewReservasGolfCampo1_btnHora_0',
    'ContentPlaceHolder1_GridViewReservasGolfCampo1_btnHora_1',
    'ContentPlaceHolder1_GridViewReservasGolfCampo1_btnHora_2',
    'ContentPlaceHolder1_GridViewReservasGolfCampo1_btnHora_3',
    'ContentPlaceHolder1_GridViewReservasGolfCampo1_btnHora_4',
    'ContentPlaceHolder1_GridViewReservasGolfCampo1_btnHora_5',
    'ContentPlaceHolder1_GridViewReservasGolfCampo1_btnHora_6',
    'ContentPlaceHolder1_GridViewReservasGolfCampo1_btnHora_7',
    'ContentPlaceHolder1_GridViewReservasGolfCampo1_btnHora_8',
    'ContentPlaceHolder1_GridViewReservasGolfCampo1_btnHora_9',
    'ContentPlaceHolder1_GridViewReservasGolfCampo1_btnHora_10',
    'ContentPlaceHolder1_GridViewReservasGolfCampo1_btnHora_11',
    'ContentPlaceHolder1_GridViewReservasGolfCampo1_btnHora_12',
    'ContentPlaceHolder1_GridViewReservasGolfCampo1_btnHora_13',
    'ContentPlaceHolder1_GridViewReservasGolfCampo1_btnHora_14',
    'ContentPlaceHolder1_GridViewReservasGolfCampo1_btnHora_15',
    'ContentPlaceHolder1_GridViewReservasGolfCampo1_btnHora_16',
    'ContentPlaceHolder1_GridViewReservasGolfCampo1_btnHora_17',
    'ContentPlaceHolder1_GridViewReservasGolfCampo1_btnHora_18',
    'ContentPlaceHolder1_GridViewReservasGolfCampo1_btnHora_19',
    'ContentPlaceHolder1_GridViewReservasGolfCampo1_btnHora_20',
    'ContentPlaceHolder1_GridViewReservasGolfCampo2_btnHora_0',
    'ContentPlaceHolder1_GridViewReservasGolfCampo2_btnHora_1',
    'ContentPlaceHolder1_GridViewReservasGolfCampo2_btnHora_2',
    'ContentPlaceHolder1_GridViewReservasGolfCampo2_btnHora_3',
    'ContentPlaceHolder1_GridViewReservasGolfCampo2_btnHora_4',
    'ContentPlaceHolder1_GridViewReservasGolfCampo2_btnHora_5',
    'ContentPlaceHolder1_GridViewReservasGolfCampo2_btnHora_6',
    'ContentPlaceHolder1_GridViewReservasGolfCampo2_btnHora_7',
    'ContentPlaceHolder1_GridViewReservasGolfCampo2_btnHora_8',
    'ContentPlaceHolder1_GridViewReservasGolfCampo2_btnHora_9',
    'ContentPlaceHolder1_GridViewReservasGolfCampo2_btnHora_10',
    'ContentPlaceHolder1_GridViewReservasGolfCampo2_btnHora_11',
    'ContentPlaceHolder1_GridViewReservasGolfCampo2_btnHora_12',
    'ContentPlaceHolder1_GridViewReservasGolfCampo2_btnHora_13',
    'ContentPlaceHolder1_GridViewReservasGolfCampo2_btnHora_14',
    'ContentPlaceHolder1_GridViewReservasGolfCampo2_btnHora_15',
    'ContentPlaceHolder1_GridViewReservasGolfCampo2_btnHora_16',
    'ContentPlaceHolder1_GridViewReservasGolfCampo2_btnHora_17',
    'ContentPlaceHolder1_GridViewReservasGolfCampo2_btnHora_18',
    'ContentPlaceHolder1_GridViewReservasGolfCampo2_btnHora_19',
    'ContentPlaceHolder1_GridViewReservasGolfCampo2_btnHora_20',
    'ContentPlaceHolder1_GridViewReservasGolfCampo3_btnHora_0',
    'ContentPlaceHolder1_GridViewReservasGolfCampo3_btnHora_1',
    'ContentPlaceHolder1_GridViewReservasGolfCampo3_btnHora_2',
    'ContentPlaceHolder1_GridViewReservasGolfCampo3_btnHora_3',
    'ContentPlaceHolder1_GridViewReservasGolfCampo1_btnHora_4',
    'ContentPlaceHolder1_GridViewReservasGolfCampo3_btnHora_5',
    'ContentPlaceHolder1_GridViewReservasGolfCampo3_btnHora_6',
    'ContentPlaceHolder1_GridViewReservasGolfCampo3_btnHora_7',
    'ContentPlaceHolder1_GridViewReservasGolfCampo3_btnHora_8',
    'ContentPlaceHolder1_GridViewReservasGolfCampo3_btnHora_9',
    'ContentPlaceHolder1_GridViewReservasGolfCampo3_btnHora_10',
    'ContentPlaceHolder1_GridViewReservasGolfCampo3_btnHora_11',
    'ContentPlaceHolder1_GridViewReservasGolfCampo3_btnHora_12',
    'ContentPlaceHolder1_GridViewReservasGolfCampo3_btnHora_13',
    'ContentPlaceHolder1_GridViewReservasGolfCampo3_btnHora_14',
    'ContentPlaceHolder1_GridViewReservasGolfCampo3_btnHora_15',
    'ContentPlaceHolder1_GridViewReservasGolfCampo3_btnHora_16',
    'ContentPlaceHolder1_GridViewReservasGolfCampo3_btnHora_17',
    'ContentPlaceHolder1_GridViewReservasGolfCampo3_btnHora_18',
    'ContentPlaceHolder1_GridViewReservasGolfCampo3_btnHora_19',
    'ContentPlaceHolder1_GridViewReservasGolfCampo3_btnHora_20',
];

function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time)
    });
}


const fn =  async (page, cb) => {
    let isOk = false
    console.log('entro en la fn')

    await page.locator('#ContentPlaceHolder1_btnBuscar').click()

    let error = await page.locator('#ContentPlaceHolder1_Error2')
    let errorValue = await error.allTextContents()

    if (errorValue[0]  === '*No hay horas disponibles') {
        await delay(40);
        console.log({error,p: errorValue[0], n : errorValue[0]  !== '*No hay horas disponibles'})
        cb(page, cb)
    }
    for (const hour of HOURS) {
        let value = await page.locator('#'+hour);
        console.log({value, hour, from: 'primer selector'})
        let hasValue = await value.getAttribute('value', null,{timeout: 100})

        console.log({value, hour, from: 'segundo selector', hasValue})

        if (hasValue !== '') {
            console.log({value, hour, hasValue, from: 'la hora tiene valor'})
            isOk = true

            await page.locator('#'+hour).click();
            //await page.getByRole('button',{name:'Aceptar' }).click();

        }
    }
    //console.log({isOk})
//
    //if (!isOk) {
    //    cb(page, cb)
    //}
    //console.log('delay final')
//
    //await delay(40000);
}

test('test', async ({ page }) => {
    console.log(process.env.TOKEN)

    await page.goto('https://www.realclublamoraleja.net/nuevareservadegolf?GLMT=' + process.env.TOKEN);

    await page.locator('#ContentPlaceHolder1_tbFecha').click();
    await page.getByText('19', { exact: true }).click();
    for (const player of PLAYERS) {
        const index = PLAYERS.indexOf(player);
        await page.locator(`#ContentPlaceHolder1_tbJug${+index + 2}`).fill(player);
    }

    await fn(page, fn)

});
