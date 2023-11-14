## Install Hiplot
1. Open a command terminal
2. Run "pip install -U hiplot"

## Create Hiplot Chart as HTML
1. File Explorer to C:\Users\Admin
2. Save csv file a data.csv in C:\Users\Admin
3. Right click in File Explorer and choose Open in Terminal
4. Run "hiplot-render data.csv > hiplot.html"

## Customize HiPlot HTML
1. File Explorer to C:\Users\Admin 
2. Copy hiplot.html
3. File Explorer to C:\Users\Admin\Branding 
4. Past hiplot.html
5. Delete index.html
6. Rename hiplot.html to index.html
7. Right click index.html > Open with Code
8. Add <script src="scripts.js" defer></script> just before the closing body tag
9. Add <link rel="stylesheet" href="styles.css"> just before the closing body tag