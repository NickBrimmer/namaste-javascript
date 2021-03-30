function x() {
    for (let i = 0; i <= 5; i++) {
        function close() {
            setTimeout(function () {
                console.log(i);
            }, i * 1000)
        }
        console.log("Namaste JS");
        close(i)
    }
}

x()