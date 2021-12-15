# McBtn

Custom button extended from `v-btn` with custom actions for tracking analytics.

### Analytics props

These props are based on google analytics event tracking parameters.

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `event-label` | String | null | The event will be tracked if this is not present. This will be the most frequently used prop for this component. This will serve as the event name, or label. |
| `event-category` | String | 'click' | The category of the event. This can be anything that will group a certain category of events. |
| `event-action` | String | 'click' | What type of action is done? Since this component is a button, we set the default to 'click' as there's no any other actions we need to track as of the moment. |
| `event-value` | String or Number | null | If value is null, eventLabel will be used as value. |

### Example

```html
<mc-btn
  large
  color="primary"
  :icon="mdiPlay"
  event-label="play-music"
>
  Play music
</mc-btn>
```