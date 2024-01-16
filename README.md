# Lekkiestatystyki

LekkieStatystyki to strona, która pozwala na wyświetlanie prywatnych statystyk związanych z kanałem Lekko Stronniczy na YouTube.

Aplikacja nie przechowuje żadnych danych, które użytkownik wprowadza w formularzu. Dane są przechowywane tylko i wyłącznie w pamięci przeglądarki.

![Przykładowy ekran po wczytaniu statystyk](https://github.com/Akasiek/lekkiestatystyki/assets/37307597/b4123c03-9467-4bcd-9bfc-e3bc60146d0f)

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

   <img src="https://github.com/Akasiek/lekkiestatystyki/assets/37307597/ee35c811-d599-4104-bdb6-9acd3bfb2f89" alt="Ekran 'All YouTube data included'" width="360px" />

5. Wejdź w "Multiple formats", znajdź sekcję "history". Zmień format "HTML" na "JSON" i kliknij "OK"

   <img src="https://github.com/Akasiek/lekkiestatystyki/assets/37307597/e90c3a3d-9370-403e-9f10-b3e4a6d09257" alt="Ekran 'Multiple formats'" width="360px" />
    
6. Kliknij "Next step"
7. Zmień "File size" na jak największą wartość. Eksport nie powinien przekroczyć nawet 1GB, ale dla pewności zalecam ustawić jak największą wartość.
8. Gdy eksport się zakończy, rozpakuj pobrany plik i znajdź w nim plik `watch-history.json` (`Takeout\YouTube and YouTube Music\history\watch-history.json`)
9. Wczytaj plik do aplikacji
