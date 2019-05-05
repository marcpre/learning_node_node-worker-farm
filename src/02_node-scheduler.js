var workerFarm = require('worker-farm'),
    workers = workerFarm(require.resolve('./02_scheduler.js'))

workers("", function (err, outp) {
    console.log(outp)
})
