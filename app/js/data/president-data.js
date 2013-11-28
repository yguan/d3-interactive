/*jslint nomen: true*/
/*global $,define,require */

define(function (require, exports, module) {
    'use strict';

    var data = [
        {'number': 1, 'president': 'George Washington', 'birth': '02/22/1732', 'took_office': '04/30/1789', 'left_office': '03/04/1797', 'party': 'No Party', 'death': '12/14/1799'},
        {'number': 2, 'president': 'John Adams', 'birth': '10/30/1735', 'took_office': '03/04/1797', 'left_office': '03/04/1801', 'party': 'Federalist', 'death': '07/04/1826'},
        {'number': 3, 'president': 'Thomas Jefferson', 'birth': '04/13/1743', 'took_office': '03/04/1801', 'left_office': '03/04/1809', 'party': 'Democratic-Republican', 'death': '07/04/1826'},
        {'number': 4, 'president': 'James Madison', 'birth': '03/16/1751', 'took_office': '03/04/1809', 'left_office': '03/04/1817', 'party': 'Democratic-Republican', 'death': '06/28/1836'},
        {'number': 5, 'president': 'James Monroe', 'birth': '04/28/1758', 'took_office': '03/04/1817', 'left_office': '03/04/1825', 'party': 'Democratic-Republican', 'death': '07/04/1831'},
        {'number': 6, 'president': 'John Quincy Adams', 'birth': '07/11/1767', 'took_office': '03/04/1825', 'left_office': '03/04/1829', 'party': 'Democratic-Republican', 'death': '02/23/1848'},
        {'number': 7, 'president': 'Andrew Jackson', 'birth': '03/15/1767', 'took_office': '03/04/1829', 'left_office': '03/04/1837', 'party': 'Democratic', 'death': '06/08/1845'},
        {'number': 8, 'president': 'Martin Van Buren', 'birth': '12/05/1782', 'took_office': '03/04/1837', 'left_office': '03/04/1841', 'party': 'Democratic', 'death': '07/24/1862'},
        {'number': 9, 'president': 'William Henry Harrison', 'birth': '02/09/1773', 'took_office': '03/04/1841', 'left_office': '04/04/1841', 'party': 'Whig', 'death': '04/04/1841'},
        {'number': 10, 'president': 'John Tyler', 'birth': '03/29/1790', 'took_office': '04/04/1841', 'left_office': '03/04/1845', 'party': 'Whig', 'death': '01/18/1862'},
        {'number': 11, 'president': 'James K. Polk', 'birth': '11/02/1795', 'took_office': '03/04/1845', 'left_office': '03/04/1849', 'party': 'Democratic', 'death': '06/15/1849'},
        {'number': 12, 'president': 'Zachary Taylor', 'birth': '11/24/1784', 'took_office': '03/04/1849', 'left_office': '07/09/1850', 'party': 'Whig', 'death': '07/09/1850'},
        {'number': 13, 'president': 'Millard Fillmore', 'birth': '01/07/1800', 'took_office': '07/09/1850', 'left_office': '03/04/1853', 'party': 'Whig', 'death': '03/08/1874'},
        {'number': 14, 'president': 'Franklin Pierce', 'birth': '11/23/1804', 'took_office': '03/04/1853', 'left_office': '03/04/1857', 'party': 'Democratic', 'death': '10/08/1869'},
        {'number': 15, 'president': 'James Buchanan', 'birth': '04/23/1791', 'took_office': '03/04/1857', 'left_office': '03/04/1861', 'party': 'Democratic', 'death': '06/01/1868'},
        {'number': 16, 'president': 'Abraham Lincoln', 'birth': '02/12/1809', 'took_office': '03/04/1861', 'left_office': '04/15/1865', 'party': 'Republican', 'death': '04/15/1865'},
        {'number': 17, 'president': 'Andrew Johnson', 'birth': '12/29/1808', 'took_office': '04/15/1865', 'left_office': '03/04/1869', 'party': 'Democratic', 'death': '07/31/1875'},
        {'number': 18, 'president': 'Ulysses S. Grant', 'birth': '04/27/1822', 'took_office': '03/04/1869', 'left_office': '03/04/1877', 'party': 'Republican', 'death': '07/23/1885'},
        {'number': 19, 'president': 'Rutherford B. Hayes', 'birth': '10/04/1822', 'took_office': '03/04/1877', 'left_office': '03/04/1881', 'party': 'Republican', 'death': '01/17/1893'},
        {'number': 20, 'president': 'James A. Garfield', 'birth': '11/19/1831', 'took_office': '03/04/1881', 'left_office': '09/19/1881', 'party': 'Republican', 'death': '09/19/1881'},
        {'number': 21, 'president': 'Chester A. Arthur', 'birth': '10/05/1830', 'took_office': '09/19/1881', 'left_office': '03/04/1885', 'party': 'Republican', 'death': '11/18/1886'},
        {'number': 22, 'president': 'Grover Cleveland', 'birth': '03/18/1837', 'took_office': '03/04/1885', 'left_office': '03/04/1889', 'party': 'Democratic', 'death': '06/24/1908'},
        {'number': 23, 'president': 'Benjamin Harrison', 'birth': '08/20/1833', 'took_office': '03/04/1889', 'left_office': '03/04/1893', 'party': 'Republican', 'death': '03/13/1901'},
        {'number': 24, 'president': 'Grover Cleveland', 'birth': '03/18/1837', 'took_office': '03/04/1893', 'left_office': '03/04/1897', 'party': 'Democratic', 'death': '06/24/1908'},
        {'number': 25, 'president': 'William McKinley', 'birth': '01/29/1843', 'took_office': '03/04/1897', 'left_office': '09/14/1901', 'party': 'Republican', 'death': '09/14/1901'},
        {'number': 26, 'president': 'Theodore Roosevelt', 'birth': '10/27/1858', 'took_office': '09/14/1901', 'left_office': '03/04/1909', 'party': 'Republican', 'death': '01/06/1919'},
        {'number': 27, 'president': 'William Howard Taft', 'birth': '09/15/1857', 'took_office': '03/04/1909', 'left_office': '03/04/1913', 'party': 'Republican', 'death': '03/08/1930'},
        {'number': 28, 'president': 'Woodrow Wilson', 'birth': '12/28/1856', 'took_office': '03/04/1913', 'left_office': '03/04/1921', 'party': 'Democratic', 'death': '02/03/1924'},
        {'number': 29, 'president': 'Warren G. Harding', 'birth': '11/02/1865', 'took_office': '03/04/1921', 'left_office': '08/02/1923', 'party': 'Republican', 'death': '08/02/1923'},
        {'number': 30, 'president': 'Calvin Coolidge', 'birth': '07/04/1872', 'took_office': '08/02/1923', 'left_office': '03/04/1929', 'party': 'Republican', 'death': '01/05/1933'},
        {'number': 31, 'president': 'Herbert Hoover', 'birth': '08/10/1874', 'took_office': '03/04/1929', 'left_office': '03/04/1933', 'party': 'Republican', 'death': '10/20/1964'},
        {'number': 32, 'president': 'Franklin D. Roosevelt', 'birth': '01/30/1882', 'took_office': '03/04/1933', 'left_office': '04/12/1945', 'party': 'Democratic', 'death': '04/12/1945'},
        {'number': 33, 'president': 'Harry S. Truman', 'birth': '05/08/1884', 'took_office': '04/12/1945', 'left_office': '01/20/1953', 'party': 'Democratic', 'death': '12/26/1972'},
        {'number': 34, 'president': 'Dwight D. Eisenhower', 'birth': '10/14/1890', 'took_office': '01/20/1953', 'left_office': '01/20/1961', 'party': 'Republican', 'death': '03/28/1969'},
        {'number': 35, 'president': 'John F. Kennedy', 'birth': '05/29/1917', 'took_office': '01/20/1961', 'left_office': '11/22/1963', 'party': 'Democratic', 'death': '11/22/1963'},
        {'number': 36, 'president': 'Lyndon B. Johnson', 'birth': '08/27/1908', 'took_office': '11/22/1963', 'left_office': '01/20/1969', 'party': 'Democratic', 'death': '01/22/1973'},
        {'number': 37, 'president': 'Richard Nixon', 'birth': '01/09/1913', 'took_office': '01/20/1969', 'left_office': '08/09/1974', 'party': 'Republican', 'death': '04/22/1994'},
        {'number': 38, 'president': 'Gerald Ford', 'birth': '07/14/1913', 'took_office': '08/09/1974', 'left_office': '01/20/1977', 'party': 'Republican', 'death': '12/26/2006'},
        {'number': 39, 'president': 'Jimmy Carter', 'birth': '10/01/1924', 'took_office': '01/20/1977', 'left_office': '01/20/1981', 'party': 'Democratic', 'death': '06/05/2004'},
        {'number': 40, 'president': 'Ronald Reagan', 'birth': '02/06/1911', 'took_office': '01/20/1981', 'left_office': '01/20/1989', 'party': 'Republican', 'death': '06/05/2004'},
        {'number': 41, 'president': 'George H. W. Bush', 'birth': '06/12/1924', 'took_office': '01/20/1989', 'left_office': '01/20/1993', 'party': 'Republican', 'death': null},
        {'number': 42, 'president': 'Bill Clinton', 'birth': '08/19/1946', 'took_office': '01/20/1993', 'left_office': '01/20/2001', 'party': 'Democratic', 'death': null},
        {'number': 43, 'president': 'George W. Bush', 'birth': '07/06/1946', 'took_office': '01/20/2001', 'left_office': '01/20/2009', 'party': 'Republican', 'death': null},
        {'number': 44, 'president': 'Barack Obama', 'birth': '08/04/1961', 'took_office': '01/20/2009', 'left_office': '01/20/2013', 'party': 'Democratic', 'death': null},
        {'number': 45, 'president': 'Barack Obama', 'birth': '08/04/1961', 'took_office': '01/20/2013', 'left_office': null, 'party': 'Democratic', 'death': null}
    ];
    exports.data = data;
});
