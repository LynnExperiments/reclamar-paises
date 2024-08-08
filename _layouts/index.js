async function updateData(newData) {
    const response = await fetch(`https://api.github.com/repos/LynnExperiments/reclamar-paises/dispatches`, {
        method: 'POST',
        headers: {
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json',
            'Authorization': `token ${process.env.GH_TOKEN}`
        },
        body: JSON.stringify({
            event_type: 'update-json',
            client_payload: {
                new_data: JSON.stringify(newData)
            }
        })
    });

    if (response.ok) {
        console.log('Data update dispatched');
    } else {
        console.error('Error dispatching data update');
    }
}
