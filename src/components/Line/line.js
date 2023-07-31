import PropTypes from "prop-types";
import React from "react";

export default function Line({
  property1,
  property2,
  property3,
  className,
  propertyLine = "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-checkbox-circle-l.svg",
}) {
  return (
    <img
      className={`line ${className}`}
      alt="Property line"
      src={
        property3 === "delete-back-2-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-delete-back-2-lin.svg"
          : property3 === "checkbox-multiple-blank-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-checkbox-multiple-1.svg"
          : property3 === "logout-circle-r-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-logout-circle-r-l.svg"
          : property3 === "thumb-down-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-thumb-down-line.svg"
          : property3 === "shield-keyhole-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-shield-keyhole-li.svg"
          : property3 === "timer-2-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-timer-2-line.svg"
          : property3 === "error-warning-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-error-warning-lin.svg"
          : property3 === "alarm-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-alarm-line.svg"
          : property3 === "shield-cross-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-shield-cross-line.svg"
          : property3 === "arrow-go-forward-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-arrow-go-forward-.svg"
          : property3 === "download-cloud-2-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-download-cloud-2-.svg"
          : property3 === "upload-cloud-2-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-upload-cloud-2-li.svg"
          : property3 === "external-link-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-external-link-lin.svg"
          : property3 === "arrow-right-circle-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-arrow-right-circl.svg"
          : property3 === "upload-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-upload-line.svg"
          : property3 === "shield-check-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-shield-check-line.svg"
          : property3 === "side-bar-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-side-bar-line.svg"
          : property3 === "menu-fold-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-menu-fold-line.svg"
          : property3 === "login-box-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-login-box-line.svg"
          : property3 === "arrow-up-down-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-arrow-up-down-lin.svg"
          : property3 === "arrow-up-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-arrow-up-line.svg"
          : property3 === "checkbox-indeterminate-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-checkbox-indeterm.svg"
          : property3 === "zoom-out-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-zoom-out-line.svg"
          : property3 === "notification-badge-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-notification-badg.svg"
          : property3 === "spam-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-spam-line.svg"
          : property3 === "toggle-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-toggle-line.svg"
          : property3 === "arrow-drop-down-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-arrow-drop-down-l.svg"
          : property3 === "arrow-right-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-arrow-right-line.svg"
          : property3 === "arrow-drop-left-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-arrow-drop-left-l.svg"
          : property3 === "check-double-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-check-double-line.svg"
          : property3 === "apps-2-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-apps-2-line.svg"
          : property3 === "information-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-information-line.svg"
          : property3 === "arrow-go-back-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-arrow-go-back-lin.svg"
          : property3 === "download-2-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-download-2-line.svg"
          : property3 === "settings-3-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-settings-3-line.svg"
          : property3 === "lock-password-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-lock-password-lin.svg"
          : property3 === "radio-button-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-radio-button-line.svg"
          : property3 === "timer-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-timer-line.svg"
          : property3 === "star-s-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-star-s-line.svg"
          : property3 === "arrow-down-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-arrow-down-line.svg"
          : property3 === "arrow-down-s-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-arrow-down-s-line.svg"
          : property3 === "upload-2-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-upload-2-line.svg"
          : property3 === "lock-unlock-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-lock-unlock-line.svg"
          : property3 === "arrow-down-circle-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-arrow-down-circle.svg"
          : property3 === "logout-box-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-logout-box-line.svg"
          : property3 === "checkbox-blank-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-checkbox-blank-li.svg"
          : property3 === "add-circle-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-add-circle-line.svg"
          : property3 === "timer-flash-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-timer-flash-line.svg"
          : property3 === "checkbox-blank-circle-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-checkbox-blank-ci.svg"
          : property3 === "find-replace-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-find-replace-line.svg"
          : property3 === "more-2-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-more-2-line.svg"
          : property3 === "delete-bin-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-delete-bin-line.svg"
          : property3 === "download-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-download-line.svg"
          : property3 === "loader-4-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-loader-4-line.svg"
          : property3 === "arrow-right-up-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-arrow-right-up-li.svg"
          : property3 === "delete-bin-6-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-delete-bin-6-line.svg"
          : property3 === "checkbox-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-checkbox-line.svg"
          : property3 === "alarm-warning-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-alarm-warning-lin.svg"
          : property3 === "logout-circle-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-logout-circle-lin.svg"
          : property3 === "filter-off-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-filter-off-line.svg"
          : property3 === "delete-bin-3-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-delete-bin-3-line.svg"
          : property3 === "delete-bin-2-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-delete-bin-2-line.svg"
          : property3 === "loader-2-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-loader-2-line.svg"
          : property3 === "search-2-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-search-2-line.svg"
          : property3 === "apps-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-apps-line.svg"
          : property3 === "arrow-left-s-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-arrow-left-s-line.svg"
          : property3 === "delete-bin-4-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-delete-bin-4-line.svg"
          : property3 === "share-forward-box-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-share-forward-box.svg"
          : property3 === "star-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-star-line.svg"
          : property3 === "menu-5-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-menu-5-line.svg"
          : property3 === "logout-box-r-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-logout-box-r-line.svg"
          : property3 === "arrow-right-down-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-arrow-right-down-.svg"
          : property3 === "arrow-drop-up-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-arrow-drop-up-lin.svg"
          : property3 === "search-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-search-line.svg"
          : property3 === "zoom-in-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-zoom-in-line.svg"
          : property3 === "login-circle-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-login-circle-line.svg"
          : property3 === "checkbox-multiple-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-checkbox-multiple.svg"
          : property3 === "shield-user-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-shield-user-line.svg"
          : property3 === "add-box-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-add-box-line.svg"
          : property3 === "lock-2-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-lock-2-line.svg"
          : property3 === "spam-3-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-spam-3-line.svg"
          : property3 === "indeterminate-circle-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-indeterminate-cir.svg"
          : property3 === "spam-2-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-spam-2-line.svg"
          : property3 === "arrow-left-circle-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-arrow-left-circle.svg"
          : property3 === "history-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-history-line.svg"
          : property3 === "eye-2-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-eye-2-line.svg"
          : property3 === "menu-2-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-menu-2-line.svg"
          : property3 === "shield-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-shield-line.svg"
          : property3 === "thumb-up-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-thumb-up-line.svg"
          : property3 === "time-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-time-line.svg"
          : property3 === "arrow-left-down-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-arrow-left-down-l.svg"
          : property3 === "filter-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-filter-line.svg"
          : property3 === "forbid-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-forbid-line.svg"
          : property3 === "checkbox-circle-line"
          ? propertyLine
          : property3 === "menu-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-menu-line.svg"
          : property3 === "settings-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-settings-line.svg"
          : property3 === "lock-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-lock-line.svg"
          : property3 === "menu-3-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-menu-3-line.svg"
          : property3 === "subtract-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-subtract-line.svg"
          : property3 === "star-half-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-star-half-line.svg"
          : property3 === "share-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-share-line.svg"
          : property3 === "menu-4-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-menu-4-line.svg"
          : property3 === "search-eye-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-search-eye-line.svg"
          : property3 === "filter-3-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-filter-3-line.svg"
          : property3 === "settings-2-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-settings-2-line.svg"
          : property3 === "close-circle-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-close-circle-line.svg"
          : property3 === "arrow-left-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-arrow-left-line.svg"
          : property3 === "upload-cloud-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-upload-cloud-line.svg"
          : property3 === "menu-unfold-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-menu-unfold-line.svg"
          : property3 === "settings-5-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-settings-5-line.svg"
          : property3 === "settings-6-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-settings-6-line.svg"
          : property3 === "shield-star-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-shield-star-line.svg"
          : property3 === "arrow-up-s-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-arrow-up-s-line.svg"
          : property3 === "arrow-left-right-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-arrow-left-right-.svg"
          : property3 === "share-forward-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-share-forward-lin.svg"
          : property3 === "refresh-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-refresh-line.svg"
          : property3 === "check-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-check-line.svg"
          : property3 === "filter-2-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-filter-2-line.svg"
          : property3 === "add-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-add-line.svg"
          : property3 === "share-circle-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-share-circle-line.svg"
          : property3 === "eye-off-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-eye-off-line.svg"
          : property3 === "delete-bin-5-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-delete-bin-5-line.svg"
          : property3 === "alert-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-alert-line.svg"
          : property3 === "divide-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-divide-line.svg"
          : property3 === "dashboard-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-dashboard-line.svg"
          : property3 === "arrow-left-up-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-arrow-left-up-lin.svg"
          : property3 === "question-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-question-line.svg"
          : property3 === "more-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-more-line.svg"
          : property3 === "list-settings-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-list-settings-lin.svg"
          : property3 === "delete-bin-7-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-delete-bin-7-line.svg"
          : property3 === "loader-5-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-loader-5-line.svg"
          : property3 === "star-half-s-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-star-half-s-line.svg"
          : property3 === "eye-close-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-eye-close-line.svg"
          : property3 === "arrow-up-circle-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-arrow-up-circle-l.svg"
          : property3 === "download-cloud-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-download-cloud-li.svg"
          : property3 === "settings-4-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-settings-4-line.svg"
          : property3 === "shield-flash-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-shield-flash-line.svg"
          : property3 === "eye-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-eye-line.svg"
          : property3 === "forbid-2-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-forbid-2-line.svg"
          : property3 === "loader-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-loader-line.svg"
          : property3 === "menu-add-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-menu-add-line.svg"
          : property3 === "delete-back-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-delete-back-line.svg"
          : property3 === "function-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-function-line.svg"
          : property3 === "share-forward-2-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-share-forward-2-l.svg"
          : property3 === "loader-3-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-loader-3-line.svg"
          : property3 === "share-box-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-share-box-line.svg"
          : property3 === "arrow-drop-right-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-arrow-drop-right-.svg"
          : property3 === "arrow-right-s-line"
          ? "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-arrow-right-s-lin.svg"
          : "https://generation-sessions.s3.amazonaws.com/9aa3faccada56a994f35e06fcae1a9e0/img/property-1-line--property-2-system--property-3-close-line.svg"
      }
    />
  );
}

Line.propTypes = {
  property1: PropTypes.oneOf(["line"]),
  property2: PropTypes.oneOf(["system"]),
  property3: PropTypes.oneOf([
    "timer-flash-line",
    "delete-bin-line",
    "arrow-right-up-line",
    "arrow-left-down-line",
    "error-warning-line",
    "settings-4-line",
    "shield-star-line",
    "upload-line",
    "settings-3-line",
    "shield-flash-line",
    "share-forward-box-line",
    "alarm-warning-line",
    "delete-back-line",
    "upload-2-line",
    "menu-2-line",
    "checkbox-circle-line",
    "check-double-line",
    "shield-line",
    "arrow-drop-up-line",
    "arrow-down-line",
    "menu-unfold-line",
    "arrow-down-s-line",
    "star-half-s-line",
    "dashboard-line",
    "loader-line",
    "delete-bin-6-line",
    "shield-keyhole-line",
    "arrow-up-s-line",
    "question-line",
    "settings-6-line",
    "lock-unlock-line",
    "delete-bin-2-line",
    "filter-off-line",
    "logout-box-r-line",
    "arrow-right-line",
    "close-circle-line",
    "filter-2-line",
    "arrow-up-down-line",
    "history-line",
    "checkbox-multiple-blank-line",
    "list-settings-line",
    "download-2-line",
    "delete-bin-3-line",
    "arrow-down-circle-line",
    "upload-cloud-2-line",
    "menu-line",
    "alarm-line",
    "divide-line",
    "logout-circle-r-line",
    "delete-bin-7-line",
    "arrow-right-down-line",
    "search-line",
    "external-link-line",
    "logout-circle-line",
    "spam-2-line",
    "more-line",
    "star-s-line",
    "arrow-go-back-line",
    "menu-fold-line",
    "menu-4-line",
    "timer-2-line",
    "search-eye-line",
    "alert-line",
    "zoom-in-line",
    "eye-close-line",
    "star-half-line",
    "timer-line",
    "apps-line",
    "menu-3-line",
    "time-line",
    "add-line",
    "checkbox-indeterminate-line",
    "download-cloud-2-line",
    "toggle-line",
    "download-cloud-line",
    "thumb-down-line",
    "close-line",
    "arrow-right-circle-line",
    "download-line",
    "lock-line",
    "forbid-line",
    "arrow-right-s-line",
    "forbid-2-line",
    "settings-5-line",
    "arrow-up-circle-line",
    "more-2-line",
    "logout-box-line",
    "share-forward-line",
    "delete-bin-5-line",
    "filter-line",
    "check-line",
    "zoom-out-line",
    "notification-badge-line",
    "lock-2-line",
    "menu-add-line",
    "search-2-line",
    "arrow-left-up-line",
    "checkbox-multiple-line",
    "find-replace-line",
    "arrow-left-s-line",
    "arrow-left-circle-line",
    "checkbox-blank-line",
    "delete-bin-4-line",
    "arrow-go-forward-line",
    "eye-2-line",
    "refresh-line",
    "settings-line",
    "menu-5-line",
    "filter-3-line",
    "settings-2-line",
    "checkbox-blank-circle-line",
    "arrow-drop-right-line",
    "add-box-line",
    "information-line",
    "share-forward-2-line",
    "upload-cloud-line",
    "arrow-left-line",
    "arrow-drop-left-line",
    "shield-user-line",
    "lock-password-line",
    "loader-4-line",
    "radio-button-line",
    "arrow-left-right-line",
    "login-circle-line",
    "arrow-drop-down-line",
    "subtract-line",
    "checkbox-line",
    "apps-2-line",
    "share-circle-line",
    "eye-off-line",
    "loader-3-line",
    "shield-check-line",
    "thumb-up-line",
    "spam-3-line",
    "shield-cross-line",
    "share-box-line",
    "side-bar-line",
    "indeterminate-circle-line",
    "spam-line",
    "login-box-line",
    "loader-2-line",
    "function-line",
    "loader-5-line",
    "delete-back-2-line",
    "add-circle-line",
    "arrow-up-line",
    "eye-line",
    "share-line",
    "star-line",
  ]),
  propertyLine: PropTypes.string,
};
