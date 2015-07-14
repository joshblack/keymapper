# KeyMapper Component

Simple utility component useful for handling keyboard shortcuts for triggering UI elements used frequently in development.

## Usage

```js
// need to make npm package for this
import KeyMapper, { CTRL, SHIFT } from 'react-keymapper';

export default class App {
  render() {
    return (
      <section>
        <KeyMapper show={[CTRL, SHIFT, 's']} hide={[CTRL, SHIFT, 'h']}>
          {() => <div>Some component to render when triggered</div>}
        </KeyMapper>
      </section>
    );
  }
}
```

All you have to do is provide a callback function for the `KeyMapper` component to call whenever your `show` combination is triggered. When you trigger your hide combination, `KeyMapper` will just render `null`.

## Support

Currently, `KeyMapper` supports the `ALT`, `CTRL`, and `SHIFT` modifier keys on a keyboard. Please use at least one modifier key along with a letter in your trigger combination.
