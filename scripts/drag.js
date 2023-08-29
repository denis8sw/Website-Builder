// Get the draggable elements by ID

// Set up event listeners


// Event handlers



function onMouseDown(e) {

  // Get the parent container's position, including padding and margin
  var parentRect = this.offsetParent.getBoundingClientRect();

  // Get the computed styles for the element
  var styles = window.getComputedStyle(this);

  // Calculate the total horizontal margin and padding
  var horizontalMargin = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var horizontalPadding = parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight);

  // Calculate the total vertical margin and padding
  var verticalMargin = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var verticalPadding = parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom);

  // Save the current mouse position
  var mouseX = e.clientX;
  var mouseY = e.clientY;

  // Save the current element position, including padding and margin
  var elementX = this.offsetLeft - horizontalMargin - horizontalPadding;
  var elementY = this.offsetTop - parentRect.top - verticalMargin - verticalPadding;

  // Set the active element
  var activeElement = this;

  // Add event listeners for mouseup and mousemove on the document object
  document.addEventListener("mouseup", onMouseUp);
  document.addEventListener("mousemove", onMouseMove);

  // Event handlers for mouseup and mousemove
  function onMouseUp(e) {
    // Remove event listeners for mouseup and mousemove on the document object
    document.removeEventListener("mouseup", onMouseUp);
    document.removeEventListener("mousemove", onMouseMove);
  }

  function onMouseMove(e) {
    // Calculate the new element position, taking padding and margin into account
    var deltaX = e.clientX - mouseX;
    var deltaY = e.clientY - mouseY;
    var newElementX = elementX + deltaX + horizontalMargin + horizontalPadding;
    var newElementY = elementY + deltaY + parentRect.top + verticalMargin + verticalPadding;

    // Set the element's new position
    activeElement.style.left = newElementX + "px";
    activeElement.style.top = newElementY + "px";

    // Prevent default browser behavior
    e.preventDefault();
  }

  // Prevent default browser behavior
  e.preventDefault();
}
