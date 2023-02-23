const requestViewer = (req, res, next) => {
    console.log(`\n${'*'.repeat(50)}\nMethod\n${'*'.repeat(50)}`);
    console.log(req.method);
    console.log(`\n${'*'.repeat(50)}\nURL\n${'*'.repeat(50)}`);
    console.log(req.url);
    console.log(`\n${'*'.repeat(50)}\nHTTP Version\n${'*'.repeat(50)}`);
    console.log(req.httpVersion);
    console.log(`\n${'*'.repeat(50)}\nBody\n${'*'.repeat(50)}`);
    console.log(req.body);
    console.log(`\n${'*'.repeat(50)}\nParams\n${'*'.repeat(50)}`);
    console.log(req.params);
    console.log(`\n${'*'.repeat(50)}\nQuery\n${'*'.repeat(50)}`);
    console.log(req.query);
    console.log(`\n${'*'.repeat(50)}\nHeaders\n${'*'.repeat(50)}`);
    console.log(req.headers);
    next();
}

module.exports = requestViewer;