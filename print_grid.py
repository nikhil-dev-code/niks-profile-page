import urllib.request
from html.parser import HTMLParser


def print_grid(url: str) -> None:
    class Cells(HTMLParser):
        def __init__(self):
            super().__init__()
            self._in_td = False
            self._buf = []
            self.rows = []
            self._row = []

        def handle_starttag(self, tag, attrs):
            if tag == "tr":
                self._row = []
            elif tag == "td":
                self._in_td = True
                self._buf = []

        def handle_endtag(self, tag):
            if tag == "td" and self._in_td:
                self._row.append("".join(self._buf).strip())
                self._in_td = False
            elif tag == "tr" and self._row:
                self.rows.append(self._row)

        def handle_data(self, data):
            if self._in_td:
                self._buf.append(data)

    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=60) as response:
        html = response.read().decode("utf-8")

    parser = Cells()
    parser.feed(html)

    points = []
    for x_text, char, y_text in parser.rows[1:]:
        points.append((char, int(x_text), int(y_text)))

    max_x = max(x for _, x, _ in points)
    max_y = max(y for _, _, y in points)
    grid = [[" "] * (max_x + 1) for _ in range(max_y + 1)]
    for char, x, y in points:
        grid[max_y - y][x] = char

    print("\n".join("".join(row) for row in grid))


if __name__ == "__main__":
    print_grid(
        "https://docs.google.com/document/d/e/2PACX-1vSvM5gDlNvt7npYHhp_XfsJvuntUhq184By5xO_pA4b_gCWeXb6dM6ZxwN8rE6S4ghUsCj2VKR21oEP/pub"
    )
