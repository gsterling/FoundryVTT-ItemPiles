import DropItemDialogShell from "./drop-item-dialog-shell.svelte";
import { SvelteApplication } from '@typhonjs-fvtt/runtime/svelte/application';

export default class DropItemDialog extends SvelteApplication {
  
  /**
   *
   * @param item
   * @param target
   * @param options
   */
  constructor(item, target, options = {}) {
    super({
      title: options.giving
        ? game.i18n.localize("ITEM-PILES.Applications.GiveItem.Title")
        : game.i18n.localize("ITEM-PILES.Applications.DropItem.Title"),
      id: `item-pile-drop-item-${item.id}${target ? "-" + target.id : ""}`,
      svelte: {
        class: DropItemDialogShell,
        target: document.body,
        props: {
          item,
          target
        }
      },
      close: () => this.options.resolve?.(null),
      ...options
    });
    this.item = item;
    this.target = target;
  }
  
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      width: 430,
      height: "auto",
      classes: ["item-piles-app"]
    })
  }
  
  static getActiveApps(id) {
    return Object.values(ui.windows).filter(app => app.id === `item-pile-drop-item-${id}`);
  }
  
  static async show(item, target, options = {}) {
    const apps = this.getActiveApps(item.id + (target ? "-" + target.id : ""));
    if (apps.length) {
      for (let app of apps) {
        app.render(false, { focus: true });
      }
      return;
    }
    return new Promise((resolve) => {
      options.resolve = resolve;
      new this(item, target, options).render(true, { focus: true });
    })
  }
  
}