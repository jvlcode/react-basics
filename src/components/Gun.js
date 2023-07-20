function Gun() {

    function handleTrigger () {
        alert('Shoot!'); 
        alert('Bullet goes!');
    }

    return (
        <>
            <h2>Gun</h2>
            <button onClick={handleTrigger}>Pull Trigger</button>
        </>
       
    )
}

export default Gun;