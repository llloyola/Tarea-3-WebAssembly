/*https://developer.mozilla.org/en-US/docs/WebAssembly/C_to_wasm*/

document.querySelector('.mybutton')
    .addEventListener('click', function() {
        let initialTime = performance.now();
        var result = Module.ccall(
            'main1',	// name of C function 
            null,	// return type
            null,	// argument types
            null	// arguments
        );
        let fin = performance.now();
        let total = fin - initialTime
        var element = document.getElementById('wasm1');
        element.innerHTML = result === 1? `Found subset with given sum\n\t${total}` : `Didn't find subset with given sum\n\t${total}`;
    });

document.querySelector('.mybutton2')
    .addEventListener('click', function() {
        let initialTime = performance.now();
        var result = Module.ccall(
            'main2',	// name of C function 
            null,	// return type
            null,	// argument types
            null	// arguments
        );
        let fin = performance.now();
        let total = fin - initialTime
        var element = document.getElementById('wasm2');
        element.innerHTML = result === 1? `Found subset with given sum\n\t${total}` : `Didn't find subset with given sum\n\t${total}`;
    });

document.querySelector('.mybutton3')
    .addEventListener('click', function() {
        let initialTime = performance.now();
        var result = Module.ccall(
            'main3',	// name of C function 
            null,	// return type
            null,	// argument types
            null	// arguments
        );
        let fin = performance.now();
        let total = fin - initialTime
        var element = document.getElementById('wasm3');
        element.innerHTML = result === 1? `Found subset with given sum\n\t${total}` : `Didn't find subset with given sum\n\t${total}`;
    });