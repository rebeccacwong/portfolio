var smallWidth = false;

function checkSize() {

    var docWidth = document.documentElement.clientWidth;
    
    if (docWidth < 1000)
    {
        if (smallWidth != true)
        {
            // update visuals
            smallWidth = true;
            updateColumnsWithTextOnTop();
        }
    }
    else
    {
        if (smallWidth == true)
        {
            updateColumnsWithTextToSide();
        }
        smallWidth = false;
    }
}

// Helper method that mutates the page to swap the order of the columns. 
// Expects there to be only one row, which has 2 columns.
function swapColumns()
{
    const row = document.querySelector('.row');

    // const cols = row.querySelectorAll('.col');
    if (row.children.length != 2)
    {
        console.log("Error! Not expecting there to be more than 2 columns in a design page. Got " + row.children.length + " columns.");
        return;
    }
    var newRow = row.children[0].cloneNode(true);
    row.appendChild(newRow);
    row.children[0].remove();
}

function updateColumnsWithTextOnTop()
{
    console.log("Updating columns with text on top");

    swapColumns();

    var designHeader = document.getElementsByClassName("design-header");
    if (designHeader.length != 1)
    {
        console.log("Error! Not expecting there to be more than 1 design header per page. Got " + designHeader.length + " headers.");
        return;
    }
    designHeader.item(0).style.marginTop = "1vw";
}

function updateColumnsWithTextToSide()
{
    console.log("Updating columns with text on side");
    swapColumns();

    var designHeader = document.getElementsByClassName("design-header");
    if (designHeader.length != 1)
    {
        console.log("Error! Not expecting there to be more than 1 design header per page. Got " + designHeader.length + " headers.");
        return;
    }
    designHeader.item(0).style.marginTop = "10vw";
}

window.onload = checkSize;

// Add event listener for window resize
window.addEventListener('resize', checkSize);