# Secure Reading View

This is a vulnerable reading-view exetension running on Firefox.

The product is meant for educational purposes only.
DO NOT use any portion of the code for production.

Running the extension
----------------

1. Execute `git clone https://github.com/nishimunea/securitycamp2017.git`
2. Launch Firefox and open `about:debugging`
3. Click Load Temporary Add-on button on the screen
4. Choose manifest.json in the cloned repository, then a book icon is shown on the right side of location bar
5. Visit arbitrary web site on Firefox
6. Click the book icon on the location bar, then the page is converted to reader mode and is shown in a popup window.
7. Enjoy!

Note
----------------

Firefox 54.x requires setting of following options in `about:config` due to instability of e10s.

- browser.tabs.remote.autostart;false
- browser.tabs.remote.autostart.2;false
