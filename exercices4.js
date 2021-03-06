/* Using .reduce()
 *
 * Using the musicData array and .reduce():
 *   - Return the total number of sales
 *   - Store the returned data in a new 'totalAlbumSales' variable
 *
 * Notes:
 *   - Do not delete the 'musicData' variable
 *   - Do not alter any of the 'musicData' content
 *   - Do not format the sales number; leave it as a long string of digits
 */

const musicData = [
  { artist: "Adele", name: "25", sales: 1731000 },
  { artist: "Drake", name: "Views", sales: 1608000 },
  { artist: "Beyonce", name: "Lemonade", sales: 1554000 },
  { artist: "Chris Stapleton", name: "Traveller", sales: 1085000 },
  { artist: "Pentatonix", name: "A Pentatonix Christmas", sales: 904000 },
  {
    artist: "Original Broadway Cast Recording",
    name: "Hamilton: An American Musical",
    sales: 820000,
  },
  { artist: "Twenty One Pilots", name: "Blurryface", sales: 738000 },
  { artist: "Prince", name: "The Very Best of Prince", sales: 668000 },
  { artist: "Rihanna", name: "Anti", sales: 603000 },
  { artist: "Justin Bieber", name: "Purpose", sales: 554000 },
];

const totalAlbumSales = musicData.reduce(
  (prevValue, album) => prevValue + album.sales,
  0
);

console.log(totalAlbumSales);
