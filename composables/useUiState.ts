import type { DrawerContent } from "~/types/ui";

export function useUiState() {
  return {
    isDrawerOpen: useState("isDrawerOpen", () => false),
    drawerContent: useState<DrawerContent>(
      "drawerContent",
      () => "AppInquiryForm"
    ),
  };
}
