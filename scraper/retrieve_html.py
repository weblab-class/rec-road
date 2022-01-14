import requests
from bs4 import BeautifulSoup


URL = "http://student.mit.edu/catalog/m1a.html"
page = requests.get(URL)


soup = BeautifulSoup(page.content, "html.parser")

print(page.text)