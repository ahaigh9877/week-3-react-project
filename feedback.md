Good:

- App is responsible for routing only and a bit of layout
- Small components that have clear responsibilities

Can be improved

- Artical should be renamed Beer list of something
- Try to avoid generic variable names like value, should be more intention revealing
- Generalize scoreupdate
- Consider using desctructuring when passing a lot of props
- Consider making folders with index.js and css together
- Make

```javascript
// <OnePageBeerCard
//   key={this.state.selectedBeer.id}
//   id={this.state.selectedBeer.id}
//   name={this.state.selectedBeer.name}
//   abv={this.state.selectedBeer.abv}
//   description={this.state.selectedBeer.description}
//   food_pairing={this.state.selectedBeer.food_pairing}
//   image_url={this.state.selectedBeer.image_url}
// />
<OnePageBeerCard
  key={this.state.selectedBeer.id}
  {...this.state.selectedBeer}
/>
```
