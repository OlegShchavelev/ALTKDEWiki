# Разработка Qt 6 приложения на Python

В данной статье показан пример простого приложения на Qt 6, созданного на языке Python.

### Создаём проект:

::: code-group

```shell[pip]
mkdir test_qt
cd test_qt
pip3 install pyqt6
```
```shell[poetry]
poetry new test_qt
cd test_qt
poetry add pyqt6
```
:::

### Вставляем код в файл main.py:

```shell
nano main.py
```
::: info Обратите внимание
В данном примере мы используем редактор `nano`, вы же можете использовать любой другой.
:::
```python
from PyQt6.QtWidgets import QApplication, QLabel, QMainWindow, QPushButton
from PyQt6.QtGui import QDesktopServices
from PyQt6.QtCore import QUrl
import sys

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Пример")
        self.setMinimumSize(250, 200)
        self.setMaximumSize(250, 200)
        
        label = QLabel("Привет, мир", self)
        label.move(78, 50)

        button = QPushButton("ALT KDE Wiki", self)
        button.move(75, 100)
        button.clicked.connect(self.open_website)
        
    def open_website(self):
        url = QUrl("https://alt-kde.wiki")
        QDesktopServices.openUrl(url)


if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = MainWindow()
    window.show()
    sys.exit(app.exec())
```

### Запускаем приложение:

::: code-group

```shell[pip]
python3 main.py
```
```shell[poetry]
poetry shell
python3 main.py
```
:::

![qt-app](./img/qt-app.png)