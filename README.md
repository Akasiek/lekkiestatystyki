# Lekkiestatystyki

LekkieStatystyki to strona, która pozwala na wyświetlanie prywatnych statystyk związanych z kanałem Lekko Stronniczy na YouTube.

Aplikacja nie przechowuje żadnych danych, które użytkownik wprowadza w formularzu. Dane są przechowywane tylko i wyłącznie w pamięci przeglądarki.

# Dostępne statystyki

- Liczba oglądniętych filmów
- Top najczęściej oglądanych filmów
- Top dzień, w którym oglądałeś najwięcej filmów
- Statystyki oglądania filmów w ciągu tygodnia

# Jak pobierać statystyki?

1. Wejdź na stronę [Google Takeout](https://takeout.google.com/settings/takeout)
2. Odznacz wszystkie usługi
3. Zaznacz "YouTube and YouTube Music"
4. Wejdź w "All YouTube data included", odznacz wszystko oprócz "history" i kliknij "OK"
5. Wejdź w "Multiple formats", znajdź sekcję "history". Zmień format "HTML" na "JSON" i kliknij "OK"
6. Kliknij "Next step"
7. Zmień "File size" na jak największą wartość. Eksport nie powinien przekroczyć nawet 1GB, ale dla pewności zalecam ustawić jak największą wartość.
8. Gdy eksport się zakończy, rozpakuj pobrany plik i znajdź w nim plik `watch-history.json` (`Takeout\YouTube and YouTube Music\history\watch-history.json`)
9. Wczytaj plik do aplikacji
