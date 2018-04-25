const functions = require('firebase-functions')
const admin = require('firebase-admin')

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

admin.initializeApp()

const request = require('request-promise')
const parse = require('xml2js').parseString

const email = 'renatoelysiqueira@gmail.com'
const token = 'FEC65CBCB0FB485C9BD4D8470B021D9B'
const checkoutUrl = 'https://pagseguro.uol.com.br/v2/checkout/payment.html?code='

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Bora Ajudar Server')
})

app.post('/donate', (req, res) => {
    request({
        uri: 'https://ws.pagseguro.uol.com.br/v2/checkout',
        method: 'POST',
        form: {
            token,
            email,
            currency: 'BRL',
            itemId1: 'idCampanha',
            itemDescription1: 'Doação',
            itemQuantity1: '1',
            itemAmount1: '2.00'  
        },
        headers: {
            'Content-Type': 'application/x-www-urlencoded; charset=UTF-8'
        }
    })
    .then( data => {
        parse(data, (err, json) => {
            res.send({
                url: checkoutUrl+json.checkout.code[0]
            })
        })
    })
})

app.post('/webhook', (req, res) => {
    const notificationCode = req.body.notificationCode
    const consultaNotificacao = 'https://ws.pagseguro.uol.com.br/v3/transactions/notifications/'
    request(consultaNotificacao+notificationCode+'?token='+token+'&email='+email)
    .then(notificationXml => {
            parse(notificationXml, (err, transactionJson) => {
                const transaction = transactionJson.transaction
                const status = transaction.status[0]
                const amount = transaction.grossAmount[0]
                const campanha = transaction.items[0].item[0].id[0]

                /*
                admin
                .database()
                .ref('/transactions/')
                .set({
                    transaction
                })
                .then( () => {
                    res
                })
                */
                res.send('Ok')
            })
        }
    )    
})

exports.api = functions.https.onRequest(app)