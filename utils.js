/**
 * @param {string} id
 * @param {Document} d
 */
function getelm(id,d=document){return d.getElementById(id)}

/**
 * @param {string} hash
 * @return {string}
 */
function getNameFromHash(hash) {
    if (hash[0] === "#") hash = hash.slice(1);
    return hash;
}

async function fetchJsonData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP ERROR! Status: ${response.status}`);
        }
        return await response.json();
    } catch (e) {
        console.error('Fetch failed:', e.message);
        return {};
    }
}