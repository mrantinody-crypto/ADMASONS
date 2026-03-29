export function splitIntoWords(element: HTMLElement): HTMLSpanElement[] {
  const text = element.textContent || '';
  element.textContent = '';
  const words = text.split(' ').filter(w => w.length > 0);
  const spans: HTMLSpanElement[] = [];

  words.forEach((word, i) => {
    const span = document.createElement('span');
    span.style.display = 'inline-block';
    span.style.overflow = 'hidden';

    const inner = document.createElement('span');
    inner.textContent = word;
    inner.style.display = 'inline-block';
    span.appendChild(inner);

    element.appendChild(span);
    if (i < words.length - 1) {
      element.appendChild(document.createTextNode(' '));
    }
    spans.push(inner);
  });

  return spans;
}

export function splitIntoLines(element: HTMLElement): HTMLSpanElement[] {
  const text = element.textContent || '';
  element.innerHTML = '';

  const words = text.split(' ');
  const tempDiv = document.createElement('div');
  tempDiv.style.cssText = window.getComputedStyle(element).cssText;
  tempDiv.style.position = 'absolute';
  tempDiv.style.visibility = 'hidden';
  tempDiv.style.width = element.offsetWidth + 'px';
  document.body.appendChild(tempDiv);

  const lines: string[] = [];
  let currentLine = '';

  words.forEach(word => {
    const testLine = currentLine ? currentLine + ' ' + word : word;
    tempDiv.textContent = testLine;
    if (tempDiv.scrollWidth > tempDiv.offsetWidth && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  });
  if (currentLine) lines.push(currentLine);
  document.body.removeChild(tempDiv);

  const spans: HTMLSpanElement[] = [];
  lines.forEach(line => {
    const wrapper = document.createElement('div');
    wrapper.style.overflow = 'hidden';
    wrapper.style.display = 'block';

    const inner = document.createElement('span');
    inner.textContent = line;
    inner.style.display = 'block';
    wrapper.appendChild(inner);
    element.appendChild(wrapper);
    spans.push(inner);
  });

  return spans;
}
